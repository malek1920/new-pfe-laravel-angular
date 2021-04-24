import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservices/auth.service';
import { AuthroutesService } from '../services/authservices/authroutes.service';
import { TokenService } from '../services/authservices/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  };
  public error = null;


  constructor(
    private authservice:AuthService,
    private Token: TokenService,
    private route:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    return this.authservice.login(this.form).subscribe(
      data => this.handleResponse(data),
      
      error => this.handleError(error)

      //data=>console.log(data)
    )

  }

  handleResponse(data){

    this.Token.handle(data.access_token);

    this.route.navigateByUrl('/');


  }

  handleError(error){
    this.error = error.error.error;



  }

}
