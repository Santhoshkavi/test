import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
update:Users=new Users;
del:Users=new Users;
val:any;
  constructor(public router:Router,public http:HttpClient) { }

  ngOnInit(): void {
  }
  // Useing for update(or)edit  the values
  save(){
    this.http.post<any>('http://localhost:4200/api/edit',this.update).subscribe((x)=>{
      //console.log(x.val)
      if(x.status=="updated"){
        
       console.log("value update successfully")
      // console.log(x.val)
       this.update=new Users;
      }
      else{
        console.log("update failed! ! !")
      }
    })

    // this.router.navigate(["login"]);
  }

  //Using for delete the entire row 
  delete(){
    this.http.post<any>('http://localhost:4200/api/delete',this.del).subscribe((x)=>{
      if(x.status=="deleted"){
        this.del=new Users;
        console.log("Deleted successfully....")
      }
      else{
        console.log("The row not delete!!!!");
        
      }
    })
  }
    
}
