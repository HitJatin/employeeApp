import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/interface';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  employeeForm = new FormGroup({
    empid: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    salary: new FormControl(''),
    department: new FormControl(''),
  })
  employeeData: Employee = {
    empid : 0,
    name:"",
    email:"",
    phone:"",
    salary:0,
    department:[]
  }

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEmployee();
    this.employeeForm.controls['empid'].disable();
  }

  getEmployee(): void {
    const empid = parseInt(this.route.snapshot.paramMap.get('empid')!,10);
    this.employeeService.getEmployee(empid)
      .subscribe(employee => {
        this.employeeData.empid = employee.empid;
        this.employeeData.name = employee.name;
        this.employeeData.email = employee.email;
        this.employeeData.phone = employee.phone;
        this.employeeData.salary = employee.salary;
        this.employeeData.department = employee.department;
      });
  }
  
  onSubmit(){
    if (this.employeeForm.value) {
      this.employeeService.updateEmployee(this.employeeData)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  get id() {
    return this.employeeForm.get('empid');
  }
  get name() {
    return this.employeeForm.get('name');
  }
  get email() {
    return this.employeeForm.get('email');
  }
  get phone() {
    return this.employeeForm.get('phone');
  }
  get salary() {
    return this.employeeForm.get('salary');
  }
  get department() {
    return this.employeeForm.get('department');
  }
}
