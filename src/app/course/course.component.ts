import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('coursedata') course;
  @Output() change = new EventEmitter();

  title='My course List';

  ngOnInit(): void {
  }

  onButtonClick(courseId){
    console.log("Course : ",courseId);
    this.change.emit(courseId);
  }

}
