import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router : Router){}

  goToProjects(){
    this.router.navigateByUrl('projects');
  }
  goToAbout(){
    this.router.navigateByUrl('about');
  }
  goToContact(){
    this.router.navigateByUrl('contact');
  }
  goToExp(){
    this.router.navigateByUrl('resume');
  }
  
}
