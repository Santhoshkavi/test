import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  plus:Users=new Users();

  constructor(public router:Router , public http:HttpClient) { }

  ngOnInit(): void {
  }
  add(){
    this.http.post<any>('http://localhost:4200/api/add',this.plus).subscribe((x)=>{
      if(x.status=="added"){
       console.log("value added successfully")
       this.plus=new Users;
      }
      else{
        console.log("added failed! ! !")
      }
    })

    
  }
}
