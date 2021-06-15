import { Component, OnInit } from '@angular/core';

import { Employee } from "src/app/interface";
import { EmployeeService } from "src/app/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {

  employeeColumns: string[] = ['empid','name','email','phone','salary','department','edit','close'];
  employeeData: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employeeData = employees);
  }

  delete(employee: Employee): void {
    this.employeeService.deleteEmployee(employee.empid).subscribe(() => this.getEmployees());
  }

  add(): void {
    this.router.navigateByUrl('/addrecord');
  }

  show(employee:Employee): void {
    this.router.navigateByUrl('/showrecord/'+employee.empid);
  }
}
