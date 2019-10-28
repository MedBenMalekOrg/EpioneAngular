import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Appointement} from '../Models/Appointment.model';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {User} from '../Models/User.model';
import {map} from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/appointment';
const DOC_URL = environment.apiUrl + '/doctor';
const RATE_URL = environment.apiUrl + '/rate';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  note:any;

  private message:string;
  private type:string;

  constructor(private authService: AuthService, private http: HttpClient) { }

    getAppointments() {
    return this.http.get<Appointement[]>(BACKEND_URL+'/getall?patient='+this.authService.getUser().id);
  }    

  cancelAppointment(idAppointment) {
    this.http.post<{Success:string}>(BACKEND_URL +
      '/remove?idAppointment='+idAppointment,null
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
}
