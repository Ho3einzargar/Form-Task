import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    profileForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
    )

    onSubmit(){
    console.log(this.profileForm.value);
    
  }
}
