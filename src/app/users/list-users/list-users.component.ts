import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';

export interface Iuser {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: Iuser[] = [];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
 listUsers:Iuser[]=[];


 
 displayedColumns: string[] = ['id', 'name', 'username', 'email','actions'];
 dataSource = new MatTableDataSource(ELEMENT_DATA);

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data =>{  
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
