import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/users/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  userList: any[] = [];

  constructor(private userService: UserServiceService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((c: any) => {
      this.userList = c;
    });
  }
}
