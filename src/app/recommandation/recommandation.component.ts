import { Component, OnInit } from '@angular/core';
import {RateService} from '../rate-app/rate.service';
import {RecommandationService} from './recommandation.service';
import {Appointement} from '../Models/Appointment.model';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recommandation',
  templateUrl: './recommandation.component.html',
  styleUrls: ['./recommandation.component.css']
})
export class RecommandationComponent implements OnInit {


  affichagePath : boolean;
  appointments: Appointement[];
  private appointmentsSub: Subscription;
  rates = [];
  constructor(private recommandationService: RecommandationService,private router: Router) { }
  paths:any;
  ngOnInit() {

    this.appointmentsSub = this.recommandationService.getAppointmentsForDoctor().subscribe((response) => {
      console.log("appointments")
      console.log(response)
      this.appointments = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });

  }

  getPathFromAppointment(id) {
    this.appointmentsSub = this.recommandationService.getPathFromAppointment(id).subscribe((response) => {
      this.paths = response;
      this.affichagePath=true;
      console.log(this.paths);
    },(e) => {
      console.log('error',e);
    },() => {


    });



  }

  ajoutRecommandation(id) {
    this.router.navigate(['/addRecommandation'] , { queryParams: { id: id } });

  }


  updateRecommandation(id,type) {
    this.router.navigate(['/updateRecommandation'] , { queryParams: { recommandation: id,type:type} });

  }

  acceptAppointment(appointment) {
  appointment.status = 'confirmed'
  this.recommandationService.changeStatusAppointment(appointment.id,'confirmed');


  }


  cancelAppointment(appointment) {
      appointment.status = 'refused'
   this.recommandationService.changeStatusAppointment(appointment.id,'refused');

  }

}
