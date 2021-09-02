import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRecordsComponent } from './components/show-records/show-records.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { QueryRecordsRoutingModule } from '../query-records/query-records-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ShowRecordsComponent,
    ConfirmDeleteDialogComponent,
    ShowRecordComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule,
    QueryRecordsRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [
    ShowRecordsComponent
  ]
})
export class EmployeeDetailsModule { }
