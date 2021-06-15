import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/interface';

@Component({
  selector: 'app-show-record',
  templateUrl: './show-record.component.html',
  styleUrls: ['./show-record.component.css']
})
export class ShowRecordComponent implements OnInit {

  empid: number = 0;
  name: string = "";
  email: string = "";
  phone: string = "";
  salary: number = 0;
  department: string = "";

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const empid = parseInt(this.route.snapshot.paramMap.get('empid')!,10);
    this.employeeService.getEmployee(empid)
      .subscribe(employee => {
        this.empid = employee.empid;
        this.name = employee.name;
        this.email = employee.email;
        this.phone = employee.phone;
        this.salary = employee.salary;
        this.department = employee.department;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
