import { Injectable } from '@angular/core';

import { Observable, of } from "rxjs";

import { Employee, EmployeeNoId } from "./interface";
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

  getEmployeeNo404<Data>(empid: number): Observable<Employee> {
    const url = `${this.employeeUrlForId}/?id=${empid}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(employee => employee[0]), 
        catchError(this.handleError<Employee>(`getEmployee empid=${empid}`))
      );
  }

  getEmployee(empid: number): Observable<Employee> {
    const url= `${this.employeeUrlForId}/${empid}`;
    return this.http.get<Employee[]>(url).pipe(
      map(employee => employee[0]),
      catchError(this.handleError<Employee>(`getEmployee empid=${empid}`))
    );
  }

  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeUrlForId}/${employee.empid}`;
    return this.http.put(url, employee, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  addEmployee(employee: EmployeeNoId): Observable<EmployeeNoId> {
    return this.http.post<EmployeeNoId>(this.employeeUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<EmployeeNoId>('addEmployee'))
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
