import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface';

const EMPLOYEE_DATA: Employee[] = [
  {
      empid: 2,
      name: "Hemant",
      email: "hemant@company.in",
      phone: "9787143291",
      salary: 50000,
      department: "sales"
  },
  {
      empid: 3,
      name: "Tanya",
      email: "tanya@company.in",
      phone: "8778483484",
      salary: 75000,
      department: "product"
  },
  {
      empid: 4,
      name: "Sara",
      email: "sara@company.in",
      phone: "9388493483",
      salary: 30000,
      department: "sales"
  }
]
@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {

  employeeColumns: string[] = ['empid','name','email','phone','salary','department'];
  employeeData = EMPLOYEE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
