import { Component, Input, OnInit } from '@angular/core';
import { DAYS } from 'src/app/common/constants/days.const';
import { isEmpty } from 'src/app/common/helpers/isEmpty';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {
  @Input() day: any;
  @Input() dayIndex: number;
  daysConst = DAYS;
  isEmpty = isEmpty;
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.dayIndex === 0) {
      this.isOpen = true;
    }
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
