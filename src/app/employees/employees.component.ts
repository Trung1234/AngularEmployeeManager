import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  listEmployees: Employee[] = [];

  constructor( private dataServ: DataService) { }

  ngOnInit(): void {
     this.dataServ.getSharedListItem().subscribe((list) =>
     {
      this.listEmployees = list;
     } );
  }

  deleteEmployee(item: Employee) {
    var index = this.listEmployees.indexOf(item);
    this.listEmployees.splice(index, 1);
  }

  editEmployee(item: Employee) {
  }

}
