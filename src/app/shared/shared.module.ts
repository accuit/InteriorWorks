import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuHeaderComponent, TopHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuHeaderComponent,
    TopHeaderComponent
  ]
})
export class SharedModule { }
