import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {  Users } from 'src/app/models/users';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
information:Users[]=[];
formAdd?:FormGroup;
  constructor( 
    ) { }
  ngOnInit(): void {
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
    console.log("2",user)
    localStorage.setItem("myInfo", JSON.stringify(this.information));

    }
}
