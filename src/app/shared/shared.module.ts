import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RouterModule } from '@angular/router';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [MenuHeaderComponent, TopHeaderComponent, TitleHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    MenuHeaderComponent,
    TopHeaderComponent,
    TitleHeaderComponent
  ]
})
export class SharedModule { }
