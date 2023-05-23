import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introweb-loader',
  templateUrl: './introweb-loader.component.html',
  styleUrls: ['./introweb-loader.component.css']
})
export class IntrowebLoaderComponent {
  constructor(private router : Router){}
}
