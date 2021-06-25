import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Employee } from 'src/app/interface';

@Component({
  selector: 'app-show-record',
  templateUrl: './show-record.component.html',
  styleUrls: ['./show-record.component.css']
})
export class ShowRecordComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ShowRecordComponent>,
    @Inject(MAT_DIALOG_DATA) public employee: Employee
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
