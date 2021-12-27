import { FinalLoginComponent } from './final-login/final-login.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: '' , component: HomeComponent},
  { path: 'final', component: FinalLoginComponent,
  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
