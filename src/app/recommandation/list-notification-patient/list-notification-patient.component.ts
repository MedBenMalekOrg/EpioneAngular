import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-notification-patient',
  templateUrl: './list-notification-patient.component.html',
  styleUrls: ['./list-notification-patient.component.css']
})
export class ListNotificationPatientComponent implements OnInit {

  private appointmentsSub: Subscription;
  private notifications:any;

  constructor(private recommandationService: RecommandationService) { }


  ngOnInit() {

    this.appointmentsSub = this.recommandationService.listNotificationsPatient().subscribe((response) => {
      this.notifications = response;
      console.log(this.notifications);
    },(e) => {
      console.log('error',e);
    },() => {


    });

  }


  openNotification(id)
  {

    this.recommandationService.openNotification(id);
    window.location.reload();
console.log('ici');

  }

}
