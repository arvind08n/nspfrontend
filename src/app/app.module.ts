import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { InstituteloginComponent } from './institutelogin/institutelogin.component';
import { InstituteregisterComponent } from './instituteregister/instituteregister.component';
import { InstitutehomeComponent } from './institutehome/institutehome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StatenodalloginComponent } from './statenodallogin/statenodallogin.component';
import { MinisterloginComponent } from './ministerlogin/ministerlogin.component';
import { MinistryhomeComponent } from './ministryhome/ministryhome.component';
import { MinistrystudentComponent } from './ministrystudent/ministrystudent.component';
import { MinistryinstituteComponent } from './ministryinstitute/ministryinstitute.component';
import { StatenodalstudentComponent } from './statenodalstudent/statenodalstudent.component';
import { StatenodalhomeComponent } from './statenodalhome/statenodalhome.component';
import { StatenodalinstituteComponent } from './statenodalinstitute/statenodalinstitute.component';
import { CheckstatusstudentComponent } from './checkstatusstudent/checkstatusstudent.component';
import { CheckstatusinstituteComponent } from './checkstatusinstitute/checkstatusinstitute.component';
import { ApplyscholarshipComponent } from './applyscholarship/applyscholarship.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentloginComponent,
    StudentregisterComponent,
    InstituteloginComponent,
    InstituteregisterComponent,
    InstitutehomeComponent,
    StudenthomeComponent,
    StatenodalloginComponent,
    MinisterloginComponent,
    MinistryhomeComponent,
    MinistrystudentComponent,
    MinistryinstituteComponent,
    StatenodalstudentComponent,
    StatenodalhomeComponent,
    StatenodalinstituteComponent,
    CheckstatusstudentComponent,
    CheckstatusinstituteComponent,
    ApplyscholarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
