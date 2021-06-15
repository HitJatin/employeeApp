import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRecordsRoutingModule } from './query-records-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    QueryRecordsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QueryRecordsModule { }
