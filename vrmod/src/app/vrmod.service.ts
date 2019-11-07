import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {baseUrl, emodUrl} from './app.site-config';
import {APIResponse} from './apiresponse';
import {DigitalSetInterface} from './digital-set.interface';
import {DigitalGroupInterface} from './digital-group.interface';
import {DigitalItemInterface} from './digital-item.interface';

@Injectable({
  providedIn: 'root'
})
export class VrmodService {

  constructor(private httpClient: HttpClient) {
    console.log('%c VRMOD service created!', 'background: #222; color: #bada55');
  }

  public get_set_list(query: string = '', limit: number = 10, offset: number = 0): Promise<APIResponse<DigitalSetInterface[]>> {
    return this.generic_list<DigitalSetInterface>('diss', query, {limit: limit.toString(10), offset: offset.toString(10)});
  }

  public get_set_info(disId: string): Promise<APIResponse<DigitalSetInterface>> {
    return this.generic_get<DigitalSetInterface>('dis', disId);
  }

  public get_group_info(disId: string): Promise<APIResponse<DigitalGroupInterface>> {
    return this.generic_get<DigitalGroupInterface>('dig', disId);
  }


  public get_emod_url(): string {
    return emodUrl;
  }

  public get_resource_url(item: DigitalItemInterface): string {
    return this._join_path(baseUrl, 'storage/resource', item.id_item);
  }

  public get_resource_preview_url(item: DigitalItemInterface): string {
    return this._join_path(baseUrl, 'storage/resource', item.id_item, 'preview');
  }

  public get_resource_thumb_url(item: DigitalItemInterface): string {
    return this._join_path(baseUrl, 'storage/resource', item.id_item, 'thumbnail');
  }

  private _prepare_params(params: { [key: string]: string }): string {
    if (!params) {
      params = {};
    }
    return Object.keys(params).map(e => e.toString() + '=' + (params[e] ? params[e].toString() : '')).join('&');
  }

  private _prepare_url(urlFragment: string, params: { [key: string]: string }): string {
    const paramString = this._prepare_params(params);
    return baseUrl + urlFragment + (paramString ? '?' + paramString : '');
  }

  private generic_request_get<T>(urlFragment: string, params: { [key: string]: string }): Promise<APIResponse<T>> {
    const url = this._prepare_url(urlFragment, params);
    return new Promise<APIResponse<T>>((resolve, reject) => {
      this.httpClient.get<APIResponse<T>>(url)
        .subscribe(res => {
          console.log(res);
          resolve(res);
        });
    });
  }

  private _join_path(...segments: string[]): string {
    return segments.map(e => e && e.startsWith('/') ? e.slice(1) : e).map(e => e.endsWith('/') ? e.slice(0, -1) : e).join('/');
  }

  private generic_get<T>(urlFragment: string, id: string): Promise<APIResponse<T>> {
    return this.generic_request_get<T>(this._join_path(urlFragment, id), {});
  }

  private generic_list<T>(urlFragment: string, query: string, params?: { [key: string]: string }): Promise<APIResponse<T[]>> {
    if (!params) {
      params = {};
    }
    params.q = query;
    return this.generic_request_get<T[]>(urlFragment, params);
  }

  private generic_list_count(urlFragment: string, query: string, params?: { [key: string]: string }): Promise<APIResponse<number>> {
    if (!params) {
      params = {};
    }
    params.q = query;
    params.dry = '1';
    return this.generic_request_get<number>(urlFragment, params);
  }
}
