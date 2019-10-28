import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../auth/login/login.component';
import {ListAppointmentComponent} from '../rate-app/list-appointment/list-appointment.component';
import {RecommandationComponent} from '../recommandation/recommandation.component';
import {RecommandedPatientsComponent} from '../recommandation/recommanded-patients/recommanded-patients.component';
import {AddRecommandationComponent} from '../recommandation/add-recommandation/add-recommandation.component';
import {FindDoctorComponent} from '../find-doctor/find-doctor.component';
import {UpdateRecommandationComponent} from '../recommandation/update-recommandation/update-recommandation.component';
import {PathPatientComponent} from '../recommandation/path-patient/path-patient.component';
import {ListNotificationPatientComponent} from '../recommandation/list-notification-patient/list-notification-patient.component';
import {ListNotificationDoctorComponent} from '../recommandation/list-notification-doctor/list-notification-doctor.component';
import {PdfComponent} from '../recommandation/pdf/pdf.component';
import {ListAppointmentsComponent} from '../list-appointments/list-appointments.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'appointements', component: RecommandationComponent},
  {path: 'addRecommandation', component: AddRecommandationComponent},
  {path: 'recomendation', component: RecommandedPatientsComponent},
  {path: 'listNotifications', component: ListNotificationPatientComponent},
  {path: 'listNotificationsDoctor', component: ListNotificationDoctorComponent},
  {path: 'pdf', component: PdfComponent},
  {path: 'findDoctor', component: FindDoctorComponent},
  {path: 'updateRecommandation', component: UpdateRecommandationComponent},
  {path: 'path', component: PathPatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'rate-list-appointments', component: ListAppointmentComponent},
  {path: 'my-appointments', component: ListAppointmentsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteModuleRoutingModule { }
