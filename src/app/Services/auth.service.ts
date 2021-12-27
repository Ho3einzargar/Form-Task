import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usermainName = "Hossein";
  passmainName = "H1234";
  
  constructor() { }
  private loggedIn : boolean = false;

  public authenticated(){
    return new Promise ((resolve, reject) => {
      resolve (this.loggedIn);
    })
  }
  

  public checkAuth(){
    return this.loggedIn;
  }
  public login(){
    this.loggedIn = true;
  }
  public logout(){
    this.loggedIn = false;
  }

}
