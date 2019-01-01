import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {RecommandationService} from '../recommandation.service';

@Component({
  selector: 'app-list-notification-doctor',
  templateUrl: './list-notification-doctor.component.html',
  styleUrls: ['./list-notification-doctor.component.css']
})
export class ListNotificationDoctorComponent implements OnInit {
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

  }

}
