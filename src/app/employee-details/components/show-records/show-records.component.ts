import { Component, OnInit, ViewChild} from '@angular/core';

import { Employee, PageRecord } from "src/app/interface";
import { EmployeeService } from "src/app/employee.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { ShowRecordComponent } from "../show-record/show-record.component";
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {

  employeeColumns: string[] = ['empid','name','email','phone','salary','department','edit','close'];
  employeeData: Employee[] = [];
  // pageRecord: PageRecord = {
  //   totalRecords: 0,
  //   recordsPerPage: 10,
  //   recordsPerPageOptions: [5,10,25,100]
  // }
  // pageEvent: PageEvent | undefined;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getEmployees();
    // this.data.changeVar.subscribe(message => {
    //   if (message !== this.myVar) {
    //       this.myVar = message;
    //       this.doSomething();
    //   }
  // });
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.employeeData = employees;
        // this.pageRecord.totalRecords = employees.length;
      });
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
    this.employeeService.deleteEmployee(employee.empid).subscribe(()=>this.getEmployees());
    console.log("called");
    // .subscribe(() => this.getEmployees());
    // const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
    //   width: '250px',
    //   data: employee
    // });

    // dialogRef.afterClosed().subscribe(() => this.getEmployees());
  }

  // shownEmployeeData(){
  //   console.log("Working")
  //   if(this.pageRecord.totalRecords < this.pageRecord.recordsPerPage)
  //   return this.employeeData;
  //   if(this.pageEvent){
  //   return this.employeeData.slice(this.pageEvent?.pageIndex*this.pageRecord.recordsPerPage,(this.pageEvent?.pageIndex+1)*this.pageRecord.recordsPerPage);
  //   }
  //   return this.employeeData
  // }
}