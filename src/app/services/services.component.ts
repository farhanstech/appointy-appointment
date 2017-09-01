import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router,private ds: DataService) { }

	  ngOnInit() {
	  }

	  selectedService(name: string){
	  	this.ds.selectedServices = name;
	  	this.router.navigate(['/agents']);
	  }

}
