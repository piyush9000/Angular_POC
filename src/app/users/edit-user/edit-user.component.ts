import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup = new FormGroup({});
  userId: any;
  userDetails: any;
  dataLoaded:boolean=false;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private _snackBar: MatSnackBar,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe(data =>{
      this.userId=data.id;
    })

    if(this.userId !="")
    {
      this.userService.viewUsers(this.userId).subscribe(data => {
        this.userDetails=data;
       console.log(this.userDetails.username)
      })
    }
    if(this.userDetails != null){

      this.editUserForm=this.formBuilder.group({
      
        'name':new FormControl(this.userDetails.name ),
        'email':new FormControl(this.userDetails.email ),
        'phone': new FormControl(this.userDetails.phone )
      })
    
       this.dataLoaded=true;
    }
     
  }
updateUser(){
  //console.log(this.userDetails.value);
}
}
