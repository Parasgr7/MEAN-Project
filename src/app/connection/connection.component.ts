import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

import {RegisterService} from './../register/register.service';
declare var $:any;

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
data:Object;
arr:Object;
user=[];
i:any;
picks = [];
organ=[];
list=[];
j:any;
friend=[];
id:any;
followC:boolean;
followI:boolean;
  constructor(private peer:RegisterService,private elRef:ElementRef) {
  
   }

  ngOnInit() {

  
this.peer.getFriends().subscribe(data=>
            {     this.arr=data;

              console.log(this.arr);
              
                  
            });
 
    
}

addFriend(val){
    this.peer.setFriend(val).subscribe();
   
}

addCompany(val){
    this.peer.setCompany(val).subscribe();
   
}


 

  


  
}
