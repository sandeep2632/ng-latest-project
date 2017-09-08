import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allownewServer=false;
allowclick=false;
servercreated=false;
Sercreationstatus="No server created";
updateServerName="Test server";
username="Sandeep";
servers=['TestServer','TestServer 1'];
      constructor() { 
         setTimeout(()=>{    //<<<---    using ()=> syntax
      this.allownewServer = true;
 },2000);

 if(this.username.length!=0)
 this.allowclick=true;
      }
  ngOnInit() {
  }
  OnCreateServer(){
  this.servercreated=true;
  this.servers.push(this.updateServerName);
    this.Sercreationstatus="Server Created and the Server name is "+ this.updateServerName;
  }
OnUpdateServername(event:Event){
console.log(event);
    this.updateServerName=(<HTMLInputElement>event.target).value;
  }
  OnUpdateusername(event:Event)
  {
    console.log((<HTMLInputElement>event.target).value);
    if((<HTMLInputElement>event.target).value.trim().length!=0)
    {
      this.allowclick=true;
    }
    else{
      this.allowclick=false;
    }

  }
  OnUserClick()
  {
    this.username="";
  }
}
