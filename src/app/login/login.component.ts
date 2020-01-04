import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  msg: string;
  userInfo: any[];

  constructor(private router: Router, private http: HttpClient) { 
    if (sessionStorage.length > 0) {
      this.router.navigateByUrl('/main');
    }
  }

  logIn() {

    if (this.username === 'manish@gmail.com' && this.password === 'manish123') {
      this.router.navigateByUrl('/main');
      sessionStorage.setItem('nm', 'admin');
    } else {
      this.msg = 'Incorrect Username/Password';
    }
    // const args = {
    //   _name: this.username,
    //   _pass: this.password
    // };
    // this.http.post('http://localhost:3000/api/login', args, {responseType: 'json'}).subscribe(
    //   (response: any[]) => {
    //     if (response.length > 0) {
    //       this.userInfo = response;
    //       sessionStorage.setItem('nm', this.userInfo[0].Name);
    //       sessionStorage.setItem('uname', this.userInfo[0].Username);
    //       this.router.navigateByUrl('/main');
    //     } else {
    //       this.msg = 'Incorrect Username/Password';
    //     }
    //   },
    //   (error) => {
    //     this.msg = error;
    //   }
    // );
  }

  ngOnInit() {
  }

}
