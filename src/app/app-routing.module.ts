import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ReultsComponent } from './reults/reults.component';

const routes: Routes=[
  {path: '', redirectTo: 'Product/Index', pathMatch:'full'},
  {path: 'Product/Index', component: ProductComponent},
  {path: 'results', component: ReultsComponent},
  {path:'Product/results', redirectTo: '/results'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
