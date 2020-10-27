import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AllLoadersComponent } from './all-loaders/all-loaders.component';

const routes: Routes = [
  { path: 'home', component: AllLoadersComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AllLoadersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
