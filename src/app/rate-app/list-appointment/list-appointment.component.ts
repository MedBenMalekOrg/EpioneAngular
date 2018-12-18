import {Component, OnDestroy, OnInit} from '@angular/core';
import {Appointement} from '../../Models/Appointment.model';
import {RateService} from '../rate.service';
import {Subscription} from 'rxjs';
import {User} from '../../Models/User.model';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit, OnDestroy {

  appointments: Appointement[];
  private appointmentsSub: Subscription;
  rates = [];
  private appWithRates: { id: number; date: Date; status: string; rated: boolean; description: string; doctor: User; patient: User }[];
  all = true;
  rated: boolean;

  constructor(private rateService: RateService) {
  }

  ngOnInit() {
    this.appointmentsSub = this.rateService.getAppointments().subscribe((response) => {
      this.appointments = response;
    },(e) => {
      console.log('error',e);
    },() => {
      this.appointments.forEach((a) => {
        this.rateService.getdoctorRate(a.doctor.id).subscribe((res) => {
          if (typeof res === 'number') {
            this.rates.push({rate:res});
          } else {
            this.rates.push({rate:0});
          }
        }, () => {
          console.log('error');
          }, () => {
          this.appWithRates = this.appointments.map((item, index) => ({ ...item, ...this.rates[index] }));
          }
        );
      });
    });

  }


  ngOnDestroy() {
    this.appointmentsSub.unsubscribe();
  }

}
