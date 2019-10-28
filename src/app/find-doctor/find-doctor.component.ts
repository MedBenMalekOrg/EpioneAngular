import { Component, OnInit } from '@angular/core';
import {DoctorServiceService} from './doctor-service.service';
import {Subscription} from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css']
})
export class FindDoctorComponent implements OnInit {
  doctors: any =[];
    closeResult: string;
   doctorsSpeciality:any[] =[];
   affichageall:boolean=true;
   recommandedDoctor:any;
   message:string;
   affichagecity:boolean;
     addrecommandation:boolean=false;
    private appointmentsSub: Subscription;

   constructor(private doctorService: DoctorServiceService, private modalService: NgbModal) {}


  ngOnInit() {
  	 this.appointmentsSub =  this.doctorService.listDoctors().subscribe((response) => {
      this.doctors = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });
  }

  addAppointment(description, date){

   this.message= this.doctorService.addAppointment(description.value,this.recommandedDoctor,1,date.value);
console.log(this.message);
this.modalService.dismissAll();
window.location.href = "http://localhost:4200/my-appointments";
  }

  open(content,id) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.recommandedDoctor=id;
  }




  searchByCity(city,speciality) {
    this.doctorsSpeciality=[];
    if (city.value.length === 0) {

      for (let i = 0; i < this.doctors.length; i++) {
        console.log(speciality.value);
        console.log(this.doctors[i].spec);
        if (this.doctors[i].spec === speciality.value) {
          this.doctorsSpeciality.push(this.doctors[i]);


        }
      }


    }

    console.log(speciality.value.length);
    if (speciality.value.length === 0) {

      for (let i = 0; i < this.doctors.length; i++) {
        console.log(city.value);
        console.log(this.doctors[i].adresse.city);
        if (this.doctors[i].adresse.city === city.value) {
          this.doctorsSpeciality.push(this.doctors[i]);


        }

        this.affichagecity = true;
        this.affichageall = false;
      }

    }

     if(speciality.value !=null && city.value!=null ) {

      for (let i = 0; i < this.doctors.length; i++) {
        console.log(city.value);
        console.log(this.doctors[i].adresse.city);
        if (this.doctors[i].adresse.city === city.value && this.doctors[i].spec=== speciality.value) {
          this.doctorsSpeciality.push(this.doctors[i]);


        }

        this.affichagecity = true;
        this.affichageall = false;
      }

    }
    if (speciality.value.length === 0 && city.value.length === 0) {
  this.doctorsSpeciality = this.doctors;
    }



  }




    private getDismissReason(reason: any): string {
    if(this.addrecommandation)
    {

      return 'validated';
    }
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
