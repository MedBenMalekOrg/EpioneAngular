import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation.service';
import {User} from '../../Models/User.model';
import {Subscription} from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-recommandation',
  templateUrl: './add-recommandation.component.html',
  styleUrls: ['./add-recommandation.component.css']
})
export class AddRecommandationComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  closeResult: string;

  addrecommandation:boolean=false;
message:string;
  recommandedDoctor:any;
  affichagecity:boolean;
  id:any;
  sub:any;
  affichageall:boolean=true;
  doctorsSpeciality:any[] =[];
  doctors: any;
  private appointmentsSub: Subscription;
  positions : {
    lat: number;
    long:number;


  };

  constructor(private recommandationService: RecommandationService,private modalService: NgbModal,private route: ActivatedRoute) {



  }

  ngOnInit() {

    this.appointmentsSub = this.recommandationService.listDoctors().subscribe((response) => {
      this.doctors = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['id'] || 0;
      });



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



  }


  open(content,id) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.recommandedDoctor=id;
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


  RecommandateDoctor(type)
  {

    console.log(this.recommandedDoctor);
    console.log(this.id);
   this.message= this.recommandationService.addRecommandation(this.id,this.recommandedDoctor,type.value);
console.log(this.message);
this.addrecommandation=true;
window.location.href = "http://localhost:4200/appointements";
this.modalService.dismissAll();
  }


}
