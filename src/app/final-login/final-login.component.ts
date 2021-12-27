import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-login',
  templateUrl: './final-login.component.html',
  styleUrls: ['./final-login.component.scss']
})
export class FinalLoginComponent implements OnInit {
  Usname: any;
  Passshow: any;
  constructor() { }

  ngOnInit(): void {
    this.Usname =  localStorage.getItem("userName");
    this.Passshow = localStorage.getItem("password");    
  }

}
