import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRecordsComponent } from './componnts/show-records/show-records.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import { QueryRecordsRoutingModule } from '../query-records/query-records-routing.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ShowRecordsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule,
    QueryRecordsRoutingModule,
    MatButtonModule
  ],
  exports: [
    ShowRecordsComponent
  ]
})
export class EmployeeDetailsModule { }
