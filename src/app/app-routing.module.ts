import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './weather/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'weather', pathMatch:'full'},
  {path:'weather', component:HomeComponent},
  // {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
