import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/models/teacher.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss'],
})
export class TeachersListComponent implements OnInit {
  teachers: ITeacher[];

  constructor(private tService: TeachersService) {}

  getRandomNumber(): number {
    return Math.floor(Math.random() * (36 - 1 + 1)) + 1;
  }

  ngOnInit(): void {
    this.tService.getAllTeachers().subscribe((teachers) => {
      this.teachers = teachers;
    });
  }
}