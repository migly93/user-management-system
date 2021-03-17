import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  user!: User

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      this.user = this.userService.getUser(+params.id);
    });
  }

  onBack() {
    this.router.navigate(["users"]);
  }

}
