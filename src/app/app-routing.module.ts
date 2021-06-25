import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecordsComponent } from './employee-details/components/show-records/show-records.component';
import { AddRecordComponent } from "./components/add-record/add-record.component";
import { EditRecordComponent } from "./components/edit-record/edit-record.component";
import { AddEditRecordComponent } from './components/add-edit-record/add-edit-record.component';

const routes: Routes = [
  { path: '', component: ShowRecordsComponent },
  { path: 'addrecord', component: AddEditRecordComponent, data: { edit: false } },
  { path: 'editrecord/:empid', component: AddEditRecordComponent, data: { edit: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
