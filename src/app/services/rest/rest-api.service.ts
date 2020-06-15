import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { WidgetsModelModule } from '../../model/widgets-model/widgets-model.module';
import { UserModelModule } from '../../model/user-model/user-model.module';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'

})
export class RestApiService {

  private apiServer =  'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /*create(product): Observable<WidgetsModelModule>{
    return this.httpClient.post<WidgetsModelModule>(this.apiServer + '/products', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }*/
  // getById(id): Observable<Product>{
  //   return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
  //     .pipe(
  //       catchError(this.errorHandler)
  //     );
  // }



  getAllById(id: string): Observable<UserModelModule> {
    return this.httpClient.get<UserModelModule>(this.apiServer + '/users/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(userModel, id): Observable<UserModelModule>{
    return this.httpClient.put<UserModelModule>(this.apiServer + '/users' + id + JSON.stringify(userModel), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
