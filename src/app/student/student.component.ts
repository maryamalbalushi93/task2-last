import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = [
    { name: 'Maryam mohammed', email: 'maryam@gmail.com', marks: 55 },
    { name: 'Reem alhooti', email: 'reem@gmail.com', marks: 30 },
  ];
}

