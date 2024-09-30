import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/users/user-service.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent implements OnInit {
  userObj: any;
  constructor(
    private queryParams: ActivatedRoute,
    private userService: UserServiceService
  ) {}
  ngOnInit(): void {
    let id = Number(this.queryParams.snapshot.paramMap.get('id'));

    this.userService.getUserById(id).subscribe((c) => {
      this.userObj = c;
    });
  }
}
