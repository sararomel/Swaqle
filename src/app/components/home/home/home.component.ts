import { Component, OnInit } from '@angular/core';
// import { RegisterService } from 'src/app/services/register/register.service';
import { ActivatedRoute } from '@angular/router';
import {  Users } from 'src/app/models/users';
import { RegisterComponent } from '../../register/register/register.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
information:Users[]=[];
formAdd?:FormGroup;
info:any;
firstName:any;
lastName:any;
userName:any;
email:any;
mobile:any;
profilePicture:any;
cart:any;
myInfo:string="";
  constructor(private fb:FormBuilder ) { 

  }
  ngOnInit(): void {
    this.formAdd = this.fb.group({
			name: ['', Validators.required],
			age: ['', Validators.required]
		});
    // this.addInformation(firstName,lastName,userName,email,mobile,profilePicture);
    this.getInfo();
    // console.log("3",this.getInfo())
  }
  addInformation(firstName:string,lastName:string,userName:string,email:string,mobile:any,profilePicture:string):void{
    let user=new Users();
    user.fisrtName=firstName
    user.lastName=lastName
    user.userName=userName
    user.email=email
    user.mobile=mobile
    user.profilePicture=profilePicture
    this.information.push(user)
    console.log("4",user)
    localStorage.setItem("myInfo", JSON.stringify(this.information));
    console.log("***",localStorage.setItem("myInfo", JSON.stringify(this.information)) )

    }

getInfo(){
//  return this.information
localStorage.setItem("myInfo", JSON.stringify(this.information));
JSON.parse(localStorage.getItem("myInfo"))
 console.log(this.information)

  }

}
