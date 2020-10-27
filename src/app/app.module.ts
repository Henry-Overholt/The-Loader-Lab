import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalieLoaderComponent } from './goalie-loader/goalie-loader.component';
import { HeaderComponent } from './header/header.component';
import { AllLoadersComponent } from './all-loaders/all-loaders.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalieLoaderComponent,
    HeaderComponent,
    AllLoadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
