import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { WhyLandInteriorsComponent } from './why-land-interiors/why-land-interiors.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainBannerComponent,
    WhyLandInteriorsComponent,
    WhatWeDoComponent,
    BlogsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'land-interiors';
}
