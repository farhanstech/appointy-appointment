import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data.service";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private router: Router,private ds: DataService) { }

  ngOnInit() {
  }

  redirectTo(page: string)
  {
  	this.router.navigate(['/'+page]);
  }

  selectedAgent(name: string){
      this.ds.selectedAgents = name;
      this.router.navigate(['/calendar']);
  }

}
