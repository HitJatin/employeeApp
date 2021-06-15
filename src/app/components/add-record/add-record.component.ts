import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Location } from '@angular/common';
import { nameCaseValidator } from 'src/app/custom-validator.directive';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent{

  employeeForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern(/[A-Z][a-z]+/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/[0-9]{10}/)]),
    salary: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
  })

  departmentList: string[] = ['Product','Sales','Delivery','Development','Operations','Testing','Services','Core','IT']
  
  constructor(
    private employeeService: EmployeeService,
    private location: Location
    ){}

  onSubmit(){
    console.log(this.employeeForm.value);
    this.employeeService.addEmployee( this.employeeForm.value)
      .subscribe(() => this.goBack());
  }

  getErrorName(){
    // if (this.employeeForm.get('name')?.hasError('required')) {
    //   return 'Name is required';
    // }
    console.log(this.employeeForm.get('phone'));
    return this.employeeForm.get('name')?.hasError('nameCase') ? 'First letter capital & rest small' : '';
  }

  goBack(): void {
    this.location.back();
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