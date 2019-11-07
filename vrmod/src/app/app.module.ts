import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShowListComponent} from './show-list/show-list.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {ShowInfoComponent} from './show-info/show-info.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ShowGroupComponent} from './show-group/show-group.component';
import {ShowItemComponent} from './show-item/show-item.component';
import {ShowItemMetadataComponent} from './show-item-metadata/show-item-metadata.component';
import {ShowItemDataComponent} from './show-item-data/show-item-data.component';
import {LightboxModule} from 'ngx-lightbox';


@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    TopMenuComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    ShowInfoComponent,
    ShowGroupComponent,
    ShowItemComponent,
    ShowItemMetadataComponent,
    ShowItemDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
