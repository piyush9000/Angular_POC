import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
addUserForm:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder,private userService:UserService,private _snackBar: MatSnackBar){ }
  

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      'name':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone': new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'username':new FormControl('',[Validators.required]),
      'city':new FormControl('',[Validators.required])
    })
  }

  createUser(){
    //console.log(this.addUserForm.value)
    this.userService.addUsers(this.addUserForm.value).subscribe(data =>{
      this._snackBar.open("user created successfully")
      //console.log(data)
    },err =>{
      //console.log(err);
      this._snackBar.open("Unable to create user")
    })
  }

}
