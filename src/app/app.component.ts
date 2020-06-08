import { Component } from '@angular/core';
import {CourseService} from './course.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' My first Angular project';

  courses;

  loadCourses(){
      this.courses = [{ id :1,name:'c'},{ id:2,name:'java'},{ id:3,name:'PHP'}];
  }

  AddCourses(){
    this.courses.push({id:4,name:'Angular'})
  }

  trackCourse(index,course){
    return course ? course.id : undefined;
  }

}
