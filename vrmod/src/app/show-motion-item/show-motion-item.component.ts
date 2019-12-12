import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

declare const THREE: any;

@Component({
  selector: 'vrmod-show-motion-item',
  templateUrl: './show-motion-item.component.html',
  styleUrls: ['./show-motion-item.component.scss']
})
export class ShowMotionItemComponent implements OnInit {
  @Input() url: string | undefined;


  @ViewChild('canvasElement', {static: true}) canvasElement: ElementRef<HTMLCanvasElement> | undefined;
  // @Input() dis: DigitalItem[] = [];
  private size: number[] | undefined = [320, 240];
  private renderer: any; // THREE.WebGLRenderer;
  private clock: any = new THREE.Clock(); // THREE.Clock
  private scene: any = new THREE.Scene(); // THREE.Scene
  private grid: any = new THREE.GridHelper(200, 10); // THREE.GridHelper
  private camera: any; // THREE.PerspectiveCamera
  private controls: any; // THREE.OrbitControls
  private animId: any;
  private loader: any = new THREE.BVHLoader(); // THREE.BVHLoader
  private skeletonHelper: any; // THREE.SkeletonHelper
  private boneContainer: any = new THREE.Group(); // THREE.Group
  private mixer: any; // THREE.AnimationMixer
  private animationClip: any;
  private animationAction: any;
  private startPosition: any; // THREE.Vector3
  constructor(protected sanitizer: DomSanitizer) {
  }

  ngOnInit() {

    console.log(THREE);
    // console.log(T2);
    // console.log(T3);
    console.log(this.loader);
    if (this.canvasElement === undefined) {
      console.error('No canvas element');
      return;
    }
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasElement.nativeElement,
      alpha: true,
      antialias: true
    });
    this.scene.add(this.grid);
    this.renderer.setClearColor(0xeeeeee);

    this.camera = new THREE.PerspectiveCamera(60,
      this.canvasElement.nativeElement.width / this.canvasElement.nativeElement.height, 1, 1000);
    this.camera.position.set(0, 200, 400);
    this.controls = new THREE.OrbitControls(this.camera, this.canvasElement.nativeElement);
    this.controls.minDistance = 30;
    this.controls.maxDistance = 700;
    this.update_size();
    this.animate();
    console.log(this.camera);

    if (this.url) {
      this.loader.load(this.url, (result: any) => {
        console.log(result);
        this.startPosition = result.skeleton.bones[0].position;
        // result.skeleton.bones[0].position.x = 0;
        // result.skeleton.bones[0].position.y = 0;
        // result.skeleton.bones[0].position.z = 0;
        this.skeletonHelper = new THREE.SkeletonHelper(result.skeleton.bones[0]);
        this.skeletonHelper.skeleton = result.skeleton;
        this.boneContainer.add(result.skeleton.bones[0]);
        this.boneContainer.translateX(-this.startPosition.x);
        this.boneContainer.translateY(-this.startPosition.y);
        this.boneContainer.translateZ(-this.startPosition.z);
        this.scene.add(this.skeletonHelper);
        this.scene.add(this.boneContainer);
        this.mixer = new THREE.AnimationMixer(this.skeletonHelper);
        this.animationClip = result.clip;
        this.animationAction = this.mixer.clipAction(this.animationClip).setEffectiveWeight(1.0).play();
        this.animationAction.paused = false;
        console.log(this.boneContainer);
      });
    }
  }

  public animate(): void {
    this.animId = requestAnimationFrame(() => this.animate());
    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
      // console.log(this.mixer);
    }
    // this.emitState();
    this.renderer.render(this.scene, this.camera);
  }

  private update_size(): void {
    if (this.canvasElement === undefined || this.size === undefined || this.size.length < 2) {
      return;
    }
    this.canvasElement.nativeElement.width = this.size[0];
    this.canvasElement.nativeElement.height = this.size[1];
    if (this.renderer) {
      this.renderer.setSize(this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);
      this.camera.aspect = this.canvasElement.nativeElement.width / this.canvasElement.nativeElement.height;
      this.camera.updateProjectionMatrix();
    }
  }
}
