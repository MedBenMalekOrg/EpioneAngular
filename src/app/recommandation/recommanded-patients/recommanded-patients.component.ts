import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation.service';
import {Appointement} from '../../Models/Appointment.model';
import {Subscription} from 'rxjs';
import {User} from '../../Models/User.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recommanded-patients',
  templateUrl: './recommanded-patients.component.html',
  styleUrls: ['./recommanded-patients.component.css']
})
export class RecommandedPatientsComponent implements OnInit {

  affichagePath : boolean;
  patients: User[];
  private appointmentsSub: Subscription;
paths:any;
  constructor(private recommandationService: RecommandationService) { }
message:string;

  ngOnInit() {


    this.appointmentsSub = this.recommandationService.getPatientsForSpecialist().subscribe((response) => {

      this.patients = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });
  }


  getPathFromPatient(id) {

    this.appointmentsSub = this.recommandationService.getPathFromPatient(id).subscribe((response) => {
            console.log(response)
      this.paths = response;
    },(e) => {
      console.log('error',e);
    },() => {

      this.affichagePath=true;
console.log(this.paths);
    });

  }


  validatePath(p) {

  p.validation = false;
  this.message= this.recommandationService.validateRecommandation(p.id);

  }
}
