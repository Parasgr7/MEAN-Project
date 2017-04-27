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
  constructor(private peer:RegisterService,private elRef:ElementRef) { }

  ngOnInit() {

  
this.peer.getFriends().subscribe(data=>
            {     this.arr=data;

              console.log(this.arr);
              
                  
            });
 
   
    
    
}

addFriend(val){
 
    this.peer.setFriend(val).subscribe(data=>{
      console.log(data);

    });
}

addCompany(val){

    this.peer.setCompany(val).subscribe(data=>{});


}

 ngAfterViewInit() {
        
        $('.changeText').click(function(){
        var $this = $(this);
        console.log('hell');

        $this.toggleClass('changeText');
        if($this.hasClass('changeText')){
            $this.text('Follow');         
        } else {
            $this.text('Following...');
          $('button').prop('disabled', true);
        }
    });
    }
 

  


  
}
