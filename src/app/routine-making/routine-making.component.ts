import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-routine-making',
  templateUrl: './routine-making.component.html',
  styleUrls: ['./routine-making.component.css']
})
export class RoutineMakingComponent implements OnInit {

  endTime: string;
  // days: string[] = ['sat', 'sun', 'mon', 'tue', 'wes', 'thu'];
  classes: number[] = [1, 2, 3, 4];
  isTeacherBusy = false;
  isClassBusy = false;

  // routines: { day: string, teacherName: string , class: string, startTime: string}[] = [];
  teacherList: { name: string, subject: string, totalClass: number, totalAssign: { time: string, class: number }[] }[] = [];
  loadClass: { time: string, class: number }[] = [];
  totalClass: number;
  constructor() {
    // this.routines.push({
    //   day: 'sat',
    //   teacherName: 'Masbha',
    //   class: "1",
    //   startTime: "09:00"
    // });
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
      name: 'Bulbul',
      subject: 'Bangla',
      totalClass: 0,
      totalAssign: []
    },
    );

    this.totalClass = this.classes.length * this.teacherList.length;
  }

  ngOnInit(): void {
  }

  doSomething(temp) {
    // console.log(temp.value)
    const x: string = temp.value;
    const y = x.split(':')
    // console.log(y[1])
    let hour = parseInt(y[0], 10) + 1;
    const min = parseInt(y[1], 10);
    let ext = 'AM';
    if (hour > 12) {
      hour -= 12;
      ext = 'PM';
    }

    if (min < 10) {
      this.endTime = `${hour} : 0${min} ${ext}`;
    } else {
      this.endTime = `${hour} : ${min} ${ext}`;
    }
  }

  add(routineForm: any) {
    // console.log(routineFrom);

    // console.log(this.teacherList);

    this.teacherList.map((teacher) => {
      if (teacher.name === routineForm.teacher && teacher.totalClass < 4 && teacher.totalAssign.length < 4) {

        let isClassFree = true;
        if (this.loadClass.length > 0) {
          this.loadClass.map((load) => {
            if (load.class === routineForm.class && load.time === routineForm.startTime) {
              // console.log("class is busy");
              this.isClassBusy = true;
              isClassFree = false;
            }
          });
        }
        // console.log("i am here")
        if (teacher.totalAssign.length >= 0) {
          let isTeacherFree = true;

          teacher.totalAssign.map((assign) => {


            // console.log(assign.time);
            // console.log("f"+routineForm.startTime);


            if (assign.time === routineForm.startTime) {
              isTeacherFree = false;
              // console.log("teacher is busy in another class")
              this.isTeacherBusy = true;
            }

          });
          if (isTeacherFree && isClassFree) {
            teacher.totalClass += 1;
            teacher.totalAssign.push({
              time: routineForm.startTime,
              class: routineForm.class,
            });
            this.loadClass.push({
              time: routineForm.startTime,
              class: routineForm.class
            });
            // console.log('teacher added successfull');
            this.isClassBusy = false;
            this.isTeacherBusy = false;
          }
        }
        // else {
        //   teacher.totalClass += 1;
        //   teacher.totalAssign.push({
        //     time: routineForm.startTime,
        //     class: routineForm.class,
        //   });
        //   this.loadClass.push({
        //     time:routineForm.startTime,
        //     class:routineForm.class
        //   })
        //   console.log('teacher added successfull from else block');
        // }
      }
    });


    // console.log(this.routines);
    // if (this.routines.length === 0){
    //   this.routines.push(routineFrom);
    // } else {
    //   const tName = routineFrom.class;
    //   console.log(typeof tName );

    //   this.routines.filter((routine) => {
    //     // console.log("in");

    //     if (routine.startTime === routineFrom.startTime && routine.teacherName === routineFrom.teacher
    //           && routine.class === routineFrom.class){
    //       console.log("this teacher is already in the class");
    //     } else if(routine.startTime === routineFrom.startTime && routine.teacherName === routineFrom.teacher){
    //       console.log('teacher is  taking another class');

    //     }
    //   })
    // }
  }
}
