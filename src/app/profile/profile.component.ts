import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { ProfileService } from './profile.service';
import { formatConstant } from '../common/helpers/formatConstant';
import { LEVELS } from '../common/constants/levels.const';
import { COURSES } from '../common/constants/courses.const';
import { AuthService } from '../auth/auth.service';
import { isEmpty } from '../common/helpers/isEmpty';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  // isLoading: boolean = false;
  user$: Observable<IUser>;
  userId: string;
  formatConstant;
  levelsConst = LEVELS;
  coursesConst = COURSES;
  error: string = null;
  isEmpty = isEmpty;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.formatConstant = formatConstant;
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // this.isLoading = true;

    this.user$ = this.profileService.getProfile(this.userId).pipe(
      finalize(() => {
        // this.isLoading = false;
      })
    );
  }

  deleteAccount(id: string) {
    this.profileService.deleteProfile(id).subscribe();
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  onHandleError() {
    this.error = null;
  }
}
