import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { AboutComponent } from './about/about.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  // { path: '', component: LandingSectionComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component: SignInPageComponent },
  // { path: 'product/:id', component: SignInPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
