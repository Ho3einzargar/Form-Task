import { InfouserService } from './../Services/infouser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:any;
  constructor(private route:ActivatedRoute,
              private Router:Router,
              private Infouser:InfouserService) {}

            ngOnInit(): void {
            this.name = localStorage.getItem("userName")
    // this.name = this.Infouser.get();
  }
  
 

}
