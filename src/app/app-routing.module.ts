import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './main/content/blog/blog.component';
import {HomeComponent} from './main/content/home/home.component';
import {ProjectsComponent} from './main/content/projects/projects.component';

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
    path: 'projects', component: ProjectsComponent
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
