import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComboBoxExampleComponent } from './combo-box-example/combo-box-example.component';
import { DevPagesComponent } from './dev-pages.component';


const routes: Routes = [
  {
    path: '',
    component: DevPagesComponent
  },
  {
    path: 'combo-text',
    component: ComboBoxExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevPagesRoutingModule { }
