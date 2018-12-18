import {Injectable, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {Appointement} from '../Models/Appointment.model';
import {environment} from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  getAppointments() {
    return this.http.get<Appointement[]>(BACKEND_URL+'/lisapp/'+this.authService.getUser().id);
  }

  getdoctorRate(docId) {
    return this.http.get<number|string>(BACKEND_URL+'/doctorRate/'+docId);
  }


}
