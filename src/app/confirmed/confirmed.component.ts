import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  constructor(private router: Router,private ds: DataService) { }

  ngOnInit() {
  }

  redirectTo(page: string)
  {
  	this.router.navigate(['/'+page]);
  }


}
