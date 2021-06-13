import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRecordsRoutingModule } from './query-records-routing.module';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddRecordComponent,
    EditRecordComponent,
    ShowRecordComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    QueryRecordsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class QueryRecordsModule { }
