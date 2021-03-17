import { UserService } from './../services/user.service';
import { User } from './../classes/user';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private backupUser!: User;
  isDataAvailable: boolean = false;

  @Input() user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.user = this.userService.getUser(+params.id);
      }
    )
    if(!this.user)
      this.user = new User();
    this.isDataAvailable = true;
    this.backupUser = Object.assign({}, this.user);
  }

  onUpdateUser() {
    if(this.user.id)
      this.userService.updateUser(this.user);
    else
      this.userService.insertUser(this.user);

    this.router.navigate(["users"]);
  }

  onResetForm(form: any) {
    if(this.user.id === 0)
      this.user = new User();
    else
      this.user = this.backupUser;
  }

  onBack() {
    this.router.navigate(["users"]);
  }
}
