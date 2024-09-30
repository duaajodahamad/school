import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/users/user-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private userService: UserServiceService,private route:Router) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((c: any) => {
      this.userList = c;
    });
  }

  navigate(id:number){
   this.route.navigate(['/user/view/'+id])
  }

}
