import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';

const routes: Routes = [
  { path: 'addrecord', component: AddRecordComponent},
  { path: 'editrecord/:empid', component: EditRecordComponent},
  { path: 'showrecord/:empid', component: ShowRecordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRecordsRoutingModule { }
