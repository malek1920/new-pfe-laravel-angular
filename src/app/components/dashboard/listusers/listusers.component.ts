import { Component, OnInit } from '@angular/core';
import { RolperService } from 'src/app/services/rolepermissionservices/rolper.service';

import * as $ from 'jquery';  

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  data = [];
  dtOptions: any = {};

  constructor(private rolperService:RolperService) { }

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu : [10,15, 25],
      processing: true
    };
    this.data = [];
    this.geListtUsersData();
    //gestion des roles
    //this.Authroute.authStatus.subscribe(value => this.loggedIn = value);

    
  }
geListtUsersData(){

  this.rolperService.getUsersData().subscribe((ret: any[])=>{
  this.data = ret;

setTimeout(()=>{                          
  $('#datatableexample').DataTable( {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true,
    lengthMenu : [ 10, 15,25],
    order:[[1,"desc"]]
} );
}, 1);


});
}
 

}
