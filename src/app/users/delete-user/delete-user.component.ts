import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId:string='';
  constructor(private userService:UserService,private activatedRouter:ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(data =>{
      this.userId=data.id;
      //console.log(this.userId);
    })

    if(this.userId){
      this.userService.deleteUsers(this.userId).subscribe(data => {
        this._snackBar.open("User deleted successfully");
      
      },
      err =>{
        this._snackBar.open("Unable to delete the user");
      })
    }
   
  }

}
