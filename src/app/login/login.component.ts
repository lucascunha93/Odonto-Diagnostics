import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from './../app.router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(check: any) {
    console.log( check );
  }

  /*loginUser(e) {
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    console.log(username, password);

      if (username === 'lucas' && password === 'oliveira') {
          this.router.navigate(['admin']);
      }else {
        this.router.navigate(['user']);
      }
    }*/
}
