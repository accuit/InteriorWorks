import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'calculator', loadChildren: () => import(`./calculator/calculator.module`).then(m => m.CalculatorModule) },
  { path: 'example-page', loadChildren: () => import(`./dev-pages/dev-pages.module`).then(m => m.DevPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
