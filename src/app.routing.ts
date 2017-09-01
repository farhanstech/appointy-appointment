import {RouterModule, Routes} from "@angular/router";
import {ServicesComponent} from "./app/services/services.component";
import {AgentsComponent} from "./app/agents/agents.component";
import {CalendarComponent} from "./app/calendar/calendar.component";
import {UserdataComponent} from "./app/userdata/userdata.component";
import {ShipmentsComponent} from "./app/shipments/shipments.component";
import {ConfirmedComponent} from "./app/confirmed/confirmed.component";

const APP_ROUTES: Routes = [
  {path: 'services', component: ServicesComponent},
  {path: 'agents', component: AgentsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'userdata', component: UserdataComponent},
  {path: 'shipments', component: ShipmentsComponent},
  {path: 'confirmed', component: ConfirmedComponent},
  {path: '', redirectTo: 'services', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);