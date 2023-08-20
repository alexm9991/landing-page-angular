import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { PlansComponent } from './components/plans/plans.component';
import { UsComponent } from './components/us/us.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ServicesComponent,
    PlansComponent,
    UsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
