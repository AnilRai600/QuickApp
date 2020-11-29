

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { EndpointBase } from './endpoint-base.service';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class StudentEndPoint extends EndpointBase {


  private readonly _studentUrl: string = "/api/student/StudentPage";
  private readonly _studentAddUrl: string = "/api/student/studentAdd";
  private readonly _studentUpdateUrl: string = "/api/student/studentUpdate";
  private readonly _studentDeleteUrl: string = "/api/student/studentDelete";
  private readonly _studentDetailUrl: string = "/api/student/studentDetail";



  constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(http, authService);
  }


  getStudentEndpoint<T>(studentId?: number): Observable<T> {
    const endpointUrl = studentId ? `${this._studentDetailUrl}/${studentId}` : this._studentUrl;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getStudentEndpoint(studentId));
      }));
  }




  getStudentsEndpoint<T>(): Observable<T> {
    const endpointUrl = this._studentUrl;

    return this.http.get<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getStudentsEndpoint());
      }));
  }


  getNewStudentEndpoint<T>(userObject: any): Observable<T> {

    return this.http.post<T>(this._studentAddUrl, JSON.stringify(userObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getNewStudentEndpoint(userObject));
      }));
  }

  getUpdateStudentEndpoint<T>(userObject: any, studentId?: number): Observable<T> {
    const endpointUrl = studentId ? `${this._studentUpdateUrl}/${studentId}` : this._studentUrl;

    return this.http.put<T>(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getUpdateStudentEndpoint(userObject, studentId));
      }));
  }

  

  getDeleteStudentEndpoint<T>(studentId: number): Observable<T> {
    const endpointUrl = `${this._studentDeleteUrl}/${studentId}`;

    return this.http.delete<T>(endpointUrl, this.requestHeaders).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getDeleteStudentEndpoint(studentId));
      }));
  }
}
