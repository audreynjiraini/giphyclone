import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyComponent } from './giphy/giphy.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path:"home", component:GiphyComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
