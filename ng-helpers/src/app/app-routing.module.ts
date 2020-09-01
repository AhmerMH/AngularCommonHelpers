import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoLoaderComponent } from './demos/demo-loader/demo-loader.component';

const routes: Routes = [
  { path: 'loader', component: DemoLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
