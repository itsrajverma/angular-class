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

  constructor(service:CourseService) {
    this.courses=service.getCourses();
  }


  onBuyClick(courseId){
    console.log('Button : ',courseId)
  }


}
