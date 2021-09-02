import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/interface';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    private employeeService: EmployeeService,
    private snackbar: MatSnackBar) {}

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  deleteRecord(): void {
    this.employeeService.deleteEmployee(this.employee.empid)
    // .subscribe(() => this.snackbar.open("Record deleted","Dismiss"));
    this.dialogRef.close();
  }
}