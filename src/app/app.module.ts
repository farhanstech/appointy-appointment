import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { UserdataComponent } from './userdata/userdata.component';
import {routing} from "../app.routing";
import {DataService} from "./data.service";
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    CalendarComponent,
    ConfirmedComponent,
    ShipmentsComponent,
    UserdataComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
