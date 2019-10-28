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

export class DoctorServiceService {
  
  note:any;

  private message:string;
  private type:string;

  constructor(private authService: AuthService, private http: HttpClient) { }

  listDoctors() {

    return this.http.get<User>(DOC_URL+'/getListDoctors');
  }

  addAppointment(description,doctor,pattern,date)
  {

    this.http.post<{succes: string}>(BACKEND_URL +
      '/add?patient='+this.authService.getUser().id+'&description='+description+'&doctor='+doctor+'&pattern='+pattern+'&date='+date,null

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
