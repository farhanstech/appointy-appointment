declare const $: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from "../data.service";
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  days_name = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
  timeSlot1 = ['12:00 AM','01:00 AM','02:00 AM','03:00 AM','04:00 AM','05:00 AM'];
  timeSlot2 = ['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM'];
  timeSlot3 = ['12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];
  currentmonthno: any;
  currentmonth: any;
  currentyear: any;
  daycount: any;
  day_no: any;
  dates: any[] = [];

  constructor(private router: Router,private ds: DataService) { }



  ngOnInit() {
    this.currentyear = moment().format('YYYY');
    this.currentmonth = moment().format('MMMM');
    this.currentmonthno = moment().format('MM');
    let year = this.currentyear;
    let month = this.currentmonthno;
    let date = '01';
    let temp = '' + year + '-' + month + '-' + date + '';
    this.daycount = moment(temp, 'YYYY-MM-DD').daysInMonth();
    this.day_no = this.days_name.indexOf(moment(temp, 'YYYY-MM-DD').format('dddd'));
    this.showCalendar(this.daycount,this.day_no);

  }

  showCalendar(count,position){
    let pos;
    for(pos=0;pos<7;pos++)
    {
      if(pos==position)
        break;
      else
        this.dates.push('');
    }
    let c=1;

    for(;c<=count;pos++)
    {
      this.dates.push(c);
      c++;
    }

  }

  next(){
    this.dates = [];
    this.currentmonthno++;
    if(this.currentmonthno>12){
      this.currentmonthno =1;
      this.currentyear++;
    }
    if(this.currentmonthno.toString().length==1)
    {
      this.currentmonthno = '0'+this.currentmonthno;
    }

    let year = this.currentyear;
    let month = this.currentmonthno;
    let date = '01';
    let temp = '' + year + '-' + month + '-' + date + '';
    this.currentmonth = moment(temp, 'YYYY-MM-DD').format('MMMM');
    this.daycount = moment(temp, 'YYYY-MM-DD').daysInMonth();
    this.day_no = this.days_name.indexOf(moment(temp, 'YYYY-MM-DD').format('dddd'));
    this.showCalendar(this.daycount,this.day_no);
  }

  prev(){
    this.dates = [];
    this.currentmonthno--;
    if(this.currentmonthno<1){
      this.currentmonthno =12;
      this.currentyear--;
    }
    if(this.currentmonthno.toString().length==1)
    {
      this.currentmonthno = '0'+this.currentmonthno;
    }
    let year = this.currentyear;
    let month = this.currentmonthno;
    let date = '01';
    let temp = '' + year + '-' + month + '-' + date + '';
    this.currentmonth = moment(temp, 'YYYY-MM-DD').format('MMMM');
    this.daycount = moment(temp, 'YYYY-MM-DD').daysInMonth();
    this.day_no = this.days_name.indexOf(moment(temp, 'YYYY-MM-DD').format('dddd'));
    this.showCalendar(this.daycount,this.day_no);
    
  }

  selectDate(date: string){
    if(date.toString().length==1)
    {
      date = '0'+date;
    }
    let temp = '' + this.currentyear + '-' + this.currentmonthno + '-' + date + '';
    this.ds.momentObj = moment(temp,'YYYY-MM-DD');
    let today = moment();
    if(this.ds.momentObj<today)
    {
      alert('Unavilable');
      return;
    }

    $('#myModal').modal('show');

  }

  selectTime(time: string){
    $('#myModal').modal('hide');
    this.ds.selectedTime = time;
    this.router.navigate(['/userdata']);
  }

  redirectTo(page: string)
  {
  	this.router.navigate(['/'+page]);
  }


}
