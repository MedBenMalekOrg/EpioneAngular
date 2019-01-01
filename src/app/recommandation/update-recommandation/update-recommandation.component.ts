import { Component, OnInit } from '@angular/core';
import {RecommandationService} from '../recommandation.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../Models/User.model';
import {RateService} from '../../rate-app/rate.service';
import {Appointement} from '../../Models/Appointment.model';
import {Address} from '../../Models/Adresse.model';

@Component({
  selector: 'app-update-recommandation',
  templateUrl: './update-recommandation.component.html',
  styleUrls: ['./update-recommandation.component.css']
})
export class UpdateRecommandationComponent implements OnInit {



  closeResult: string;

  addrecommandation:boolean=false;
  message:string;
  recommandedDoctor:any;
  affichagecity:boolean;
  id:any;
  sub:any;
  affichageall:boolean=true;
  doctorsSpeciality:any[] =[];



  affichageBestDocture:boolean=false;
  affichageBestDocture2:boolean=false;
  rates = [];
  private userWithRates: { id: number; firstname: string; lastname: string; birthday: string; email: string; adresse: Address; ville: string,rate:number;spec:string;}[];
  private appointmentsSub: Subscription;
  doctors :any;
  bestdoctor:any;
  bestdoctor2:any;

  docs: any;
  recommandation:any;
  bestDoctors:any[] =[];
  test:boolean=false;
  type:string;
  testarret:boolean=false;
  indice:any=0;

  constructor(private recommandationService: RecommandationService,private modalService: NgbModal,private route: ActivatedRoute,private rateService: RateService) {


    this.appointmentsSub = this.recommandationService.listDoctors().subscribe((response) => {
      this.doctors = response;
    },(e) => {
      console.log('error',e);
    },() => {

 console.log(this.doctors);
      this.getTopDoctors();
    });
  }

  ngOnInit() {


    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.recommandation = +params['recommandation'] || 0;
      });


    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.type = params['type'] ;
      });




  }


  getTopDoctors()
  {

    this.appointmentsSub = this.recommandationService.listDoctors().subscribe((response) => {
      this.docs = response;
    },(e) => {
      console.log('error',e);
    },() => {
      this.docs.forEach((a) => {
        this.rateService.getdoctorRate(a.id).subscribe((res) => {
            if (typeof res === 'number') {
              this.rates.push({rate:res});
            } else {
              this.rates.push({rate:0});
            }
          }, () => {
            console.log('error');
          }, () => {
          this.rates.forEach(value => console.log(value));
            this.userWithRates = this.docs.map((item, index) => ({ ...item, ...this.rates[index] }));
            let max=0;
           let indexx:number;


            for(let i=0;i<this.userWithRates.length;i++)
            {
              console.log(this.userWithRates[i].spec);
              if(this.userWithRates[i].rate>max && this.userWithRates[i].spec === this.type)
              {

                max=this.userWithRates[i].rate;
                indexx=i;
                console.log('index:'+indexx);
                console.log('max'+max);

                this.affichageBestDocture=true;

              }


            }

          this.bestdoctor=this.userWithRates[indexx];


            let index2;
            let maxx=0;
          for(let i=0;i<this.userWithRates.length;i++)
          {
            console.log(this.userWithRates[i].spec);
            if(this.userWithRates[i].rate>maxx && this.userWithRates[i].spec === this.type && i!==indexx)
            {

              maxx=this.userWithRates[i].rate;
              index2=i;
              console.log('index:'+index2);
              console.log('max'+maxx);

              this.affichageBestDocture2=true;

              console.log(this.bestdoctor2);
            }


          }
          this.bestdoctor2=this.userWithRates[index2];

          console.log(this.bestdoctor2);

          }
        );
      });
    });


  }


  getBestDoctors() {


    this.appointmentsSub = this.recommandationService.listDoctors().subscribe((response) => {
      this.doctors = response;
    },(e) => {
      console.log('error',e);
    },() => {


    });




    console.log(this.doctors);
let max=0;
   // this.recommandationService.getDoctorRate(this.doctors[0].id).subscribe((res) => {

     // console.log(this.doctors[0].firstname);
       //  console.log(res);
      // max=res;
      // });


     let index=0;

       let note:number;

    for(let i=0;i<this.doctors.length;i++) {

       this.recommandationService.getDoctorRate(this.doctors[i].id).subscribe(      (response) => {
         console.log(response);
         if(note>max && this.doctors[i].spec===this.type)
         {
           max=note;
           index=i;

           console.log('index'+index);
           console.log('max'+max);
           console.log(this.doctors[i].firstname);
           if(i===this.doctors.length)
           {
             this.bestDoctors.push(this.doctors[index]);
             console.log(this.bestDoctors);
           }

         }
         note=response;
       });

       console.log(note);
       if(note<max && this.doctors[i].spec===this.type)
       {
         index=i;
         max=note;

       }



    }

    this.bestDoctors.push(this.doctors[index]);

 //   console.log(this.indice);


   // if (this.test===false)
    // {
      // this.bestDoctors.push(this.doctors[0]);
      // console.log(this.bestDoctors);
    // }



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


  RecommandateDoctor(type,justification)
  {

    console.log(this.recommandedDoctor);
    console.log(this.id);
    this.message=
      this.recommandationService.updateRecommandation(this.recommandation,this.recommandedDoctor,type.value,justification.value);
    console.log(this.message);
    this.addrecommandation=true;

    this.modalService.dismissAll();
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


}
