import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRecordsComponent } from './show-records/show-records.component';



@NgModule({
  declarations: [
    ShowRecordsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowRecordsComponent
  ]
})
export class EmployeeDetailsModule { }
