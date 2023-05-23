import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntrowebLoaderComponent } from './introweb-loader/introweb-loader.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    IntrowebLoaderComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
