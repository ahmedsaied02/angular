import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LineComponent } from './line/line.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { MouseComponent } from './mouse/mouse.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { FeaturedBooksComponent } from './featured-books/featured-books.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagesCollectionComponent } from './images-collection/images-collection.component';
import { NewlyAddedComponent } from './newly-added/newly-added.component';
import { AboutComponent } from './about/about.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LineComponent,
    LandingSectionComponent,
    MouseComponent,
    FooterComponent,
    BookComponent,
    FeaturedBooksComponent,
    CartComponent,
    CartItemComponent,
    ImagesCollectionComponent,
    NewlyAddedComponent,
    AboutComponent,
    SignInPageComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
