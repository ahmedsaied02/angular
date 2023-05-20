import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { AboutComponent } from './about/about.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthGuard } from './auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartComponent } from './cart/cart.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // { path: '', component: LandingSectionComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SignInPageComponent },
  { path: '', canActivate: [AuthGuard], component: AppLayoutComponent, children: [
    
    { path: '', component: LandingPageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: NoPageFoundComponent },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
