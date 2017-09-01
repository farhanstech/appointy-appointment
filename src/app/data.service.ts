import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as moment from 'moment';

@Injectable()
export class DataService {

  public selectedServices: string='';
  public selectedAgents: string='';
  public momentObj: any;
  public selectedTime: string='';
  public full_name: string='';
  public last_name: string='';
  public country: string='';
  public email: string='';
  public contact: string='';
  public company: string='';
  public shipments: string='';

  constructor() { }

}
