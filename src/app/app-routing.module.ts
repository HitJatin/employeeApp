import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowRecordsComponent } from './employee-details/componnts/show-records/show-records.component';

const routes: Routes = [
  { path: '', redirectTo: 'showrecords', pathMatch: 'full' },
  { path: 'showrecords', component: ShowRecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
