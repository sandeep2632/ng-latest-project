import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
logs=[];
counter=0;
 showtext=true;

  constructor() { }

  ngOnInit() {
  }
 OnButtonClick()
 {
   this.counter++;
   this.logs.push("Logs are being created and the counter is "+ this.counter);
   if(this.showtext)
this.showtext=false;
else
this.showtext=true;
 }
}
