import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-path-patient',
  templateUrl: './path-patient.component.html',
  styleUrls: ['./path-patient.component.css']
})
export class PathPatientComponent implements OnInit {
  private appointmentsSub: Subscription;
  private paths:any;
  private doctor:any;
  private specialist:any;
  affichage:boolean=false;
  constructor(private recommandationService: RecommandationService) { }

  ngOnInit() {

    this.appointmentsSub = this.recommandationService.getPathPatient().subscribe((response) => {
      this.paths = response;
      console.log(this.paths);
    },(e) => {
      console.log('error',e);
    },() => {


    });

  }



  showDoctors(id) {
    this.appointmentsSub = this.recommandationService.getDoctorFromRecommandation(id).subscribe((response) => {
      this.doctor = response;
      console.log(this.doctor);
    },(e) => {
      console.log('error',e);
    },() => {


    });



    this.appointmentsSub = this.recommandationService.getSpecialistFromRecommandation(id).subscribe((response) => {
      this.specialist = response;
      console.log(this.specialist);
    },(e) => {
      console.log('error',e);
    },() => {


    });

this.affichage=true;

  }
}
