import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { QueryRecordsRoutingModule } from './query-records/query-records-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { SearchDepartmentComponent } from './components/search-department/search-department.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ShowRecordComponent,
    EditRecordComponent,
    SearchDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeDetailsModule,
    QueryRecordsRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
