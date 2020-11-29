

import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { StudentEndPoint } from './student-endpoint.service';
import { Student } from '../models/student.model';


@Injectable()
export class StudentService {
 
  constructor(
    private authService: AuthService,
    private studentEndPoint: StudentEndPoint) {

  }

  getStudent(studentId?: number) {
    return this.studentEndPoint.getStudentEndpoint<Student>(studentId);
  }

  

  getStudents() {

    return this.studentEndPoint.getStudentsEndpoint<Student[]>();
  }

 
  updateStudent(student: Student) {
    if (student.id) {
      return this.studentEndPoint.getUpdateStudentEndpoint(student, student.id);
    } else {
      return this.studentEndPoint.getUpdateStudentEndpoint<Student>(student, student.id).pipe(
        mergeMap(foundStudent => {
          student.id = foundStudent.id;
          return this.studentEndPoint.getUpdateStudentEndpoint(student, student.id);
        }));
    }
  }

  newStudent(student: Student) {
    return this.studentEndPoint.getNewStudentEndpoint<Student>(student);
  }

 

  deleteStudent(studentId: number | any): Observable<Student> {
   

    return this.studentEndPoint.getDeleteStudentEndpoint<Student>(studentId);
  }

 
}

