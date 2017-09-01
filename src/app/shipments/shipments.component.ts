import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data.service";


@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  cname:string = '';
  shipments:string ='No. of Shipments';
  constructor(private router: Router,private ds: DataService) { }

  ngOnInit() {
  }

  setData(){
    if(this.cname=='')
    {
        alert('Enter Company Name');
    }
    else if(this.shipments=='No. of Shipments')
    {
        alert('Select shipments');
    }
    else{
      this.ds.company = this.cname;
      this.ds.shipments = this.shipments;
      this.router.navigate(['/confirmed']);
    }

  }
  redirectTo(page: string)
  {
  	this.router.navigate(['/'+page]);
  }

}
