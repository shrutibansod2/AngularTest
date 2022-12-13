import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  code:string="";
  Description:string="";
  constructor() { }
  ngOnInit(): void {
  }
  ReadData(){
    this.code = (<HTMLInputElement>document.getElementById("code")).value;
    this.Description = (<HTMLInputElement>document.getElementById("Description")).value;
    console.log("Code:"+this.code);
    console.log("Description:"+this.Description);
  }
}
