import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-routine-making',
  templateUrl: './routine-making.component.html',
  styleUrls: ['./routine-making.component.css']
})
export class RoutineMakingComponent implements OnInit {


  classes: number[] = [1, 2, 3, 4];

  teacherList: { name: string, subject: string, totalClass: number, totalAssign: { time: string, class: number }[] }[] = [];
  loadClass: { time: string, class: number }[] = [];
  totalClass: number;
  constructor() {

    this.teacherList.push(
      {
        name: 'Mustakim',
        subject: 'English',
        totalClass: 0,
        totalAssign: []
      }, {
      name: 'Masbha',
      subject: 'Ict',
      totalClass: 0,
      totalAssign: []
    }, {
      name: 'Samiul',
      subject: 'Science',
      totalClass: 0,
      totalAssign: []
    }, {
      name: 'Nishat',
      subject: 'Bangla',
      totalClass: 0,
      totalAssign: []
    },
    );

    this.totalClass = this.classes.length * this.teacherList.length;
  }

  ngOnInit(): void {
  }

  add(routineForm: any) {
    this.teacherList.map((teacher) => {
      let isClassFree = true;
      let classTime = '09:00';
      let isTeacherFree = true;

      if (teacher.totalClass < 4 && teacher.totalAssign.length < 4) {

        if (this.loadClass.length > 0) {
          let temp = 9;
          let count = 0;
          this.loadClass.map((load) => {
            count++;

            if (count !== 4) {
              temp += 1;

              if (temp === 13) {
                temp = 9;
              }

            } else {
              count = 0;
            }
            classTime = temp.toString() + ':00';

            if (load.class === routineForm.class && load.time === classTime) {
              console.log('class is there');
              isClassFree = false;
            }
          });
        }

        if (teacher.totalAssign.length >= 0) {
          teacher.totalAssign.map((assign) => {
            if (assign.time === classTime) {
              isTeacherFree = false;
            }
          });
        }

        if (isClassFree && isTeacherFree) {
          this.loadClass.push({
            time: classTime,
            class: routineForm.class
          });

          teacher.totalAssign.push({
            time: classTime,
            class: routineForm.class
          });
        }

      }
    });




  }
}
