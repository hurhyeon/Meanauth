import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {}

  onRegisterSubmit() {
    //UI에서입력한사용자등록정보를이용하여user객체생성
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    }; //RegisterUser사용자등록
    this.authService.registerUser(user).subscribe((data) => {
      if (data.success) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }
}
