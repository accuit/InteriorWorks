import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DevPagesModule } from './dev-pages/dev-pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CalculatorModule,
    SharedModule,
    DevPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
