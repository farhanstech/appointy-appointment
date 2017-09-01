import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import {DataService} from "../data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  fname: string='';
  lname: string='';
  contact: string='';
  email: string='';

  constructor(private router: Router,private ds: DataService) {
    
   }

  ngOnInit() {
  }

  

  
  setUserData(){

    if(this.fname=='')
    {
      alert('Please enter First Name');
    }
    else if(this.lname=='')
    {
      alert('Please enter Last Name');
    }
    else if(this.contact=='')
    {
      alert('Please enter Contact no.');
    }
    else if(this.email=='')
    {
      alert('Please enter Email');
    }
    else{
      this.ds.full_name = this.fname;
      this.ds.last_name = this.lname;
      this.ds.contact = this.contact;
      this.ds.email = this.email;
      this.router.navigate(['/shipments']);
    }

    
  }

  redirectTo(page: string)
  {
    this.router.navigate(['/'+page]);
  }

}
