import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalieLoaderComponent } from './goalie-loader/goalie-loader.component';
import { HeaderComponent } from './header/header.component';
import { AllLoadersComponent } from './all-loaders/all-loaders.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { UmbrellaWindLoaderComponent } from './umbrella-wind-loader/umbrella-wind-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalieLoaderComponent,
    HeaderComponent,
    AllLoadersComponent,
    AboutComponent,
    DescriptionComponent,
    UmbrellaWindLoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
