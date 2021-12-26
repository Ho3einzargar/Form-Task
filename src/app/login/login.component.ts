import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userV: string;
  passV: string;

    profileForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
    )

    onSubmit(){
    console.log(this.profileForm.value);
    this.userV = this.profileForm.value.username;
    this.passV = this.profileForm.value.password;
    if(this.userV !='' && this.passV !='' ){
      this.router.navigate(['/'])

    }
  }

  constructor(private route: ActivatedRoute,
   private router: Router,
    ) { }

  ngOnInit(): void {
  }

}
