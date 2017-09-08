import {Component} from '@angular/core';

@Component({

    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{

        color:white;
    }
    `]
})
export class ServerComponent{
serverID=10;
ServerStatus="Offline";

constructor()
{

    this.ServerStatus=Math.random()>0.5?'online':'offline';
}

getServerStatus()
{
    return this.ServerStatus;
}
getcolor()
{
     return this.ServerStatus==='online'?'green':'red';
}
}  