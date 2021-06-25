import { Component, OnInit} from '@angular/core';

import { Employee } from "src/app/interface";
import { EmployeeService } from "src/app/employee.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { ShowRecordComponent } from "../show-record/show-record.component";

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
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employeeData = employees);
  }

  add(): void {
    this.router.navigateByUrl('/addrecord');
  }

  show(employee:Employee): void {
    console.log(employee);
    this.dialog.open(ShowRecordComponent, {
      width: '500px',
      data: employee
    });
  }

  confirmDelete(employee: Employee): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '250px',
      data: employee
    });

    dialogRef.afterClosed().subscribe(() => this.getEmployees());
  }
}