import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { QueryRecordsRoutingModule } from './query-records/query-records-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { FilterPipe } from './filter.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AddEditRecordComponent } from './components/add-edit-record/add-edit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    EditRecordComponent,
    FilterPipe,
    AddEditRecordComponent
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
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
