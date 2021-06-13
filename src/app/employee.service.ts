import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { Employee } from "./interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = 'http://localhost:3000/records';
  private employeeUrlForId = 'http://localhost:3000/record';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl)
      .pipe(
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  deleteEmployee(empid: number): Observable<Employee> {
    const url =`${this.employeeUrlForId}/${empid}`;

    return this.http.delete<Employee>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Employee>('deleteEmployee')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  };
}
