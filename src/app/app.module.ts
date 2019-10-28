import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouteModuleRoutingModule} from './route-module/route-module-routing.module';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth-interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListAppointmentComponent } from './rate-app/list-appointment/list-appointment.component';
import { RoundPipe } from './rate-app/round.pipe';
import { RecommandationComponent } from './recommandation/recommandation.component';
import { RecommandedPatientsComponent } from './recommandation/recommanded-patients/recommanded-patients.component';
import { AddRecommandationComponent } from './recommandation/add-recommandation/add-recommandation.component';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateRecommandationComponent } from './recommandation/update-recommandation/update-recommandation.component';
import { PathPatientComponent } from './recommandation/path-patient/path-patient.component';
import { ListNotificationPatientComponent } from './recommandation/list-notification-patient/list-notification-patient.component';
import { ListNotificationDoctorComponent } from './recommandation/list-notification-doctor/list-notification-doctor.component';
import { FbLikeComponent } from './recommandation/fb-like/fb-like.component';
import { TweetComponent } from './recommandation/tweet/tweet.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfComponent } from './recommandation/pdf/pdf.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListAppointmentComponent,
    RoundPipe,
    RecommandationComponent,
    RecommandedPatientsComponent,
    AddRecommandationComponent,
    UpdateRecommandationComponent,
    PathPatientComponent,
    ListNotificationPatientComponent,
    ListNotificationDoctorComponent,
    FbLikeComponent,
    TweetComponent,
    PdfComponent,
    FindDoctorComponent,
    ListAppointmentsComponent   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouteModuleRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    PdfViewerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCDjpHRVBphhPAjBK53eZI5y45ouRw3no'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
