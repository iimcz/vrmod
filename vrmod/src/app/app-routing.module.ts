import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowListComponent} from './show-list/show-list.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ShowInfoComponent} from './show-info/show-info.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'laternavr', component: ContactsComponent},
  {path: 'shows', component: ShowListComponent},
  {path: 'shows/:id', component: ShowInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
