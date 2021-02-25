import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  countDownDate = new Date("Feb 26, 2021 12:00:00").getTime();
  range : any;
  visible: boolean= false;

  x= setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate-now;
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.range = hours+"h "+minutes+"m "+seconds+"s ";

    if(distance<0){
      clearInterval(this.x);
      this.visible= true;
    }
  });
}
