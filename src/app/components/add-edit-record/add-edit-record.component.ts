import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';
import { Department } from 'src/app/interface';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from 'src/app/interface';

@Component({
  selector: 'app-add-edit-record',
  templateUrl: './add-edit-record.component.html',
  styleUrls: ['./add-edit-record.component.css']
})
export class AddEditRecordComponent implements OnInit {

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/[A-Z][a-z]+/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    salary: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
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
  head: string = "Add Record";
  editMode: boolean = false;
  employeeId: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private _snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(v => this.editMode = v.edit);
    if (this.editMode) {
      this.getEmployee();
      this.head = "Update Record";
    }
  }

  getEmployee(): void {
    this.employeeId = parseInt(this.route.snapshot.paramMap.get('empid')!, 10);
    this.employeeService.getEmployee(this.employeeId)
      .subscribe(employee => {
        this.employeeId = employee.empid;
        this.employeeForm.get('name')?.setValue(employee.name);
        this.employeeForm.get('email')?.setValue(employee.email);
        this.employeeForm.get('phone')?.setValue(employee.phone);
        this.employeeForm.get('salary')?.setValue(employee.salary);
        this.employeeForm.get('department')?.setValue(employee.department);
      });
  }

  onSubmit() {
    if (this.editMode) {
      let employee = this.employeeForm.value;
      employee.empid = this.employeeId;
      this.employeeService.updateEmployee(employee)
        .subscribe(() => {
          this._snackbar.open("Record updated", "Dismiss");
          this.goBack()
        });
    }
    else
    this.employeeService.addEmployee(this.employeeForm.value)
      .subscribe(() => {
        this._snackbar.open("New record added", "Dismiss");
        this.goBack()
      });
  }

  getErrorMessage(error: any, field: string): string {
    if (error.required) {
      return field + " is required";
    }
    if (error.email) {
      return "Enter a valid email";
    }
    if (error.pattern) {
      if (field == "Name")
        return "First letter capital & rest small";
      else
        return "Enter a valid " + field;
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
