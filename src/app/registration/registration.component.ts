import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countDownDate = new Date("April 13, 2021 1:00:00").getTime();
  range : any;
  visible: boolean= false;

  x= setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate-now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.range = days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

    if(distance<0){
      clearInterval(this.x);
      this.visible= true;
    }
  });

  showErrorAlert(){
    Swal.fire({
      title: 'Payment Failed!',
      text: 'Please Try Again',
      imageUrl:"../../assets/img/payment failed.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  showSuccessfulAlert(){
    Swal.fire({
      title: 'Payment Successful!',
      imageUrl: "../../assets/img/payment successful.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
}
