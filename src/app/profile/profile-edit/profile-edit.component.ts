import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { MONTHS } from 'src/app/common/constants/months.const';
import { formatConstant } from 'src/app/common/helpers/formatConstant';
import { IUser } from 'src/app/models/user.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  isLoading: boolean = false;
  userId = JSON.parse(localStorage.getItem('userData')!)._id;
  editForm: FormGroup;
  formatConstant;
  monthsConst = MONTHS;

  constructor(
    private profileService: ProfileService,
    private location: Location
  ) {
    this.formatConstant = formatConstant;
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.initForm();

    this.profileService
      .getProfile(this.userId)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((user) => {
        const [dobYear, dobMonth, dobDay] = user.dob.split('-');

        this.editForm.patchValue({
          emoji: user.emoji,
          firstName: user.firstName,
          lastName: user.lastName,
          dobData: {
            dobDay,
            dobMonth,
            dobYear,
          },
        });

        if (user.status) {
          for (const status of user.status) {
            this.populateFormArray(status);
          }
        }
      });
  }

  private initForm() {
    this.editForm = new FormGroup({
      emoji: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dobData: new FormGroup({
        dobDay: new FormControl(null, Validators.required),
        dobMonth: new FormControl(null, Validators.required),
        dobYear: new FormControl(null, Validators.required),
      }),
      status: new FormArray([], Validators.required),
    });
  }

  getControls() {
    return (<FormArray>this.editForm.get('status')).controls;
  }

  onAddStatus() {
    this.populateFormArray(null);
  }

  onRemoveStatus(i: number) {
    (<FormArray>this.editForm.get('status')).removeAt(i);
  }

  populateFormArray(data) {
    const control = new FormControl(data, Validators.required);
    (<FormArray>this.editForm.get('status')).push(control);
  }

  onSubmit() {
    if (!this.editForm.valid) {
      return;
    }

    this.isLoading = true;
    const { emoji, firstName, lastName, dobData, status } = this.editForm.value;

    const dob = `${dobData.dobYear}-${dobData.dobMonth}-${dobData.dobDay}`;

    const user: Omit<IUser, 'course' | 'level' | 'email'> = {
      emoji,
      firstName,
      lastName,
      dob,
      status,
    };

    this.profileService
      .updateProfile(this.userId, user)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.location.back();
        })
      )
      .subscribe();
  }
}