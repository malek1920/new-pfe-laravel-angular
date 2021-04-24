import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../services/authservices/auth.service';
import { TokenService } from '../services/authservices/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form = {
    email: null, 
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [] as any;

  constructor(private authservice:AuthService,
    private router: Router,
    private token:TokenService,
    private notify: SnotifyService,
    private Notfiy:SnotifyService

     ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.Notfiy.info('Attendez svp ...' ,{timeout:5000})
    return this.authservice.signup(this.form).subscribe(
       data => this.handleResponse(data),
       error => this.notify.error(error.error.error)


    )

  }

  handleResponse(data){
    this.token.handle(data.access_token);
  
    let _router = this.router;
    this.Notfiy.confirm('Done! your are registered Now , Please confirm yourself by clicking on verify user button sent to you on your email', {
      buttons:[
        {text: 'Okay  ! thank u ', 
        action: toster =>{
           _router.navigateByUrl('/'),
           this.Notfiy.remove(toster.id)
          }
      },
      ]
    })
    
  }
  
  
  handleError(error) {
    this.error = error.error.errors;
  }



}
