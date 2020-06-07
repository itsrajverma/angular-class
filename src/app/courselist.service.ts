import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {

  constructor() { }

  getCourses(){
    return ['c','c++','java','angular','nodejs','react-native'];
  }

}
