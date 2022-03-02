import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: ' ',
    component: UsersComponent,
    pathMatch:'full'
    
  },
  
  {
    path: 'users',
    component: UsersComponent,
    
  },
  
  

  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

