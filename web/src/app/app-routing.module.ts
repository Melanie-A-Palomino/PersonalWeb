import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrowebLoaderComponent} from './introweb-loader/introweb-loader.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClient } from '@angular/common/http'

const routes : Routes = [
  {path: "", component: IntrowebLoaderComponent}, 
  {path: "About", component: AboutComponent},
  {path: "Contact", component: ContactComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
