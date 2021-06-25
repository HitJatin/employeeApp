import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Department } from 'src/app/interface';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit{

  employeeForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern(/[A-Z][a-z]+/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]),
    salary: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
  })

  departmentList: Department[] = [
    { id: 1, name: 'Product', selected: false },
    { id: 2, name: 'Sales', selected: false },
    { id: 3, name: 'Delivery', selected: false },
    { id: 4, name: 'Development', selected: false },
    { id: 5, name: 'Operations', selected: false },
    { id: 6, name: 'Testing', selected: false },
    { id: 7, name: 'Services', selected: false },
    { id: 8, name: 'Core', selected: false },
    { id: 9, name: 'IT', selected: false },
  ];
  // private searchTerms = new Subject<string>();
  // filteredDepartments: Observable<string[]> | undefined;
  // departments$!: Observable<string[]>;
  searchText = new FormControl('');
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private _snackbar: MatSnackBar
    ){}

  ngOnInit(){}

  onSubmit(){
    this.employeeService.addEmployee( this.employeeForm.value)
      .subscribe(() => {
        this._snackbar.open("New record added","Dismiss");
        this.goBack()
      });
  }

  getErrorMessage(error:any,field:string): string{
    if(error.required){
      return field+" is required";
    }
    if(error.email){
      return "Enter a valid email";
    }
    if(error.pattern){
      if(field=="Name")
      return "First letter capital & rest small";
      else
      return "Enter a valid "+field;
    }
    return "";
  }

  goBack(): void {
    this.router.navigateByUrl('');
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