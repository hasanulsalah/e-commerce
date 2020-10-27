import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'product', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
