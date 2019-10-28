import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Appointement} from '../Models/Appointment.model';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../Models/User.model';
import {map} from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/recommandation';
const DOC_URL = environment.apiUrl + '/doctor';
const RATE_URL = environment.apiUrl + '/rate';
const APPOINTMENT_URL = environment.apiUrl + '/appointment';
@Injectable({
  providedIn: 'root'
})

export class RecommandationService {

  note:any;

  private message:string;
  private type:string;

  constructor(private authService: AuthService, private http: HttpClient) { }

changeStatusAppointment(id,status){
this.http.post<{ succes: string, NO: string,Error:string}>(APPOINTMENT_URL +
    '/updatestatus?idAppointment='+id+'&status='+status,null

    )
    .subscribe(
      response => {


        if(response.succes!=null) {
          this.message = response.succes;
        }
        else if(response.NO!=null){
          this.message = response.NO;

        }
        else{
          this.message = response.Error;
        }
        console.log(this.message);

      },
      error => {
        console.log(error);

      },
      () => {

        console.log(this.message);

      }
    );
}



  listNotificationsPatient()
  {

    return this.http.get<object[]>(BACKEND_URL+'/listNotifications?patient='+this.authService.getUser().id);
  }


  listNotificationsDoctor()
  {

    return this.http.get<object[]>(BACKEND_URL+'/listNotificationsSpecialist?specialist='+this.authService.getUser().id);

  }

  openNotification(id) {

    this.http.post<{Success:string}>(BACKEND_URL +
      '/openNotification?notification='+id+'&user='+this.authService.getUser().id,null

    ).subscribe(
      response => {


        if(response.Success!=null) {
          this.message = response.Success;
        }

        console.log(this.message);

      },
      error => {
        console.log(error);

      },
      () => {

        console.log(this.message);

      }
    );

    return this.message;

  }
  getAppointmentsForDoctor() {
    return this.http.get<Appointement[]>(BACKEND_URL+'/listAppointmentForDoctor?doctor='+this.authService.getUser().id);
  }

  getPathFromAppointment(id) {
    return this.http.get<object>(BACKEND_URL+'/listallrecommandations/?appointment='+id);
  }

getPatientsForSpecialist() {

  return this.http.get<User[]>(BACKEND_URL+'/ListAllPatientsForSpecialist?specialist='+this.authService.getUser().id);
}

getPathFromPatient(id) {

  return this.http.get<object>(BACKEND_URL+'/findPathByPatient?patient='+id);
}

  getDoctorRate(id) {

    return this.http.get<number>(RATE_URL+'/doctorRate/'+id);


  }


 getPathPatient() {

   return this.http.get<object>(BACKEND_URL+'/getRecommandationsByPatient?patient='+this.authService.getUser().id);

 }

 getDoctorFromRecommandation(id)
 {

   return this.http.get<object>(BACKEND_URL+'/getDoctorFromRecommandation?recommandation='+id);


 }


  getSpecialistFromRecommandation(id) {

    return this.http.get<object>(BACKEND_URL+'/getRecommandedDoctorFromRecommandation?recommandation='+id);


  }

validateRecommandation(id) {

  this.http.post<{ succes: string, NO: string,Error:string}>(BACKEND_URL +
    '/validateRecommandation?recommandation='+id+'&doctor='+this.authService.getUser().id,null

    )
    .subscribe(
      response => {


        if(response.succes!=null) {
          this.message = response.succes;
        }
        else if(response.NO!=null){
          this.message = response.NO;

        }
        else{
          this.message = response.Error;
        }
        console.log(this.message);

      },
      error => {
        console.log(error);

      },
      () => {

        console.log(this.message);

      }
    );

  return this.message;
}


  listDoctors() {

    return this.http.get<User>(DOC_URL+'/getListDoctors');
  }



  updateRecommandation(recommandation,d,type,justification)
  {

    this.http.post<{Success: string,Error:string}>(BACKEND_URL +
      '/updateRecommandation?recommandation='+recommandation+'&specialist='
      +this.authService.getUser().id+'&type='+type+'&justification='+justification+'&newspecialist='+d,null

    )
      .subscribe(
        response => {


          if(response.Success!=null) {
            this.message = response.Success;
          }

          if(response.Error!=null) {
            this.message = response.Error;
          }

          console.log(this.message);

        },
        error => {
          console.log(error);

        },
        () => {

          console.log(this.message);

        }
      );

    return this.message;

  }


  addRecommandation(a,d,type)
  {

    this.http.post<{succes: string}>(BACKEND_URL +
      '/addRecommandation?a='+a+'&d='+d+'&type='+type,null

    )
      .subscribe(
        response => {


          if(response.succes!=null) {
            this.message = response.succes;
          }

          console.log(this.message);

        },
        error => {
          console.log(error);

        },
        () => {

          console.log(this.message);

        }
      );

    return this.message;

  }

}
