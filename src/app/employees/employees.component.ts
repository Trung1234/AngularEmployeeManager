import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { DataService } from '../data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  listEmployees: Employee[] = [];

  constructor( private dataServ: DataService,private modalService: NgbModal) { }

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
    this.dataServ.sendSharedItem(item);
    this.dataServ.sendSharedListItem(this.listEmployees);
    this.modalService.open(EmployeeDetailComponent);
  }

}
