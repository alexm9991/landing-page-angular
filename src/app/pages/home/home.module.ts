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
import { ServiceComponent } from './components/services/service.component';
import { WaveComponent } from './components/plans/components/wave.component';
import { PlanComponent } from './components/plans/components/plan.component';
import { CommentUserComponent } from './components/us/components/comment-user.component';
import { SliderComponent } from './components/us/components/slider.component';
import { SlidesPipe } from './pipes/slides.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ServicesComponent,
    ServiceComponent,
    PlansComponent,
    WaveComponent,
    PlanComponent,
    UsComponent,
    CommentUserComponent,
    SliderComponent,
    FooterComponent,
    SlidesPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
