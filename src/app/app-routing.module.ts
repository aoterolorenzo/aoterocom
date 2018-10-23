import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './main/content/blog/blog.component';
import {HomeComponent} from './main/content/home/home.component';
import {AoterocomComponent} from './main/content/projects/aoterocom/aoterocom.component';
import {ComunibaComponent} from './main/content/projects/comuniba/comuniba.component';
import {RianxosencabosComponent} from './main/content/projects/rianxosencabos/rianxosencabos.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'projects/aoterocom', component: AoterocomComponent
  },

  {
    path: 'projects/comuniba', component: ComunibaComponent
  },
  {
    path: 'projects/rianxosencabos', component: RianxosencabosComponent
  },

];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {

}
