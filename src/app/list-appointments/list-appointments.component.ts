import { Component, OnInit } from '@angular/core';
import {Appointement} from '../Models/Appointment.model';
import {Subscription} from 'rxjs';
import {AppointementService} from './appointement.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-appointments',
  templateUrl: './list-appointments.component.html',
  styleUrls: ['./list-appointments.component.css']
})
export class ListAppointmentsComponent implements OnInit {
 appointments: Appointement[];
  private appointmentsSub: Subscription;
 constructor(private appointementService: AppointementService,private router: Router) { }

  ngOnInit() {
  	    this.appointmentsSub = this.appointementService.getAppointments().subscribe((response) => {
      console.log("appointments")
      console.log(response)
      this.appointments = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });
  }

  cancelAppointment(idAppointment){
  		this.appointementService.cancelAppointment(idAppointment)
  		 this.appointmentsSub = this.appointementService.getAppointments().subscribe((response) => {
      console.log("appointments")
      console.log(response)
      this.appointments = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });

  }

}
