import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  ngOnInit(): void {
    this.fillArray();
  }

  constructor(private router:Router){}

  arr : Array<string> = [];

  fillArray(){
    this.arr.push("Software Engineer, Revature LLC ");
    this.arr.push("Instructor, IDTech ");
    this.arr.push("Backend Developer Intern, The Comfort Company SAC");
    this.arr.push("Software Developer Intern, Corseba S.A.C");
    this.arr.push("Project Manager Assistant, Silva Construction LLC");
  }

}
  

  
