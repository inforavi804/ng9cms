import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {

  @Input() empData = {} as any;
  @Output() newEmpData:EventEmitter<any> = new EventEmitter();
  @Output() closeModal:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

      ngOnInit(): void {
          if(!this.empData) {
              this.empData = {} as any;
              this.empData.status = -1;
          }
      }


      addOrUpdateEmployee() {
          console.log("form submitted", this.empData);
          this.newEmpData.emit(this.empData);          
      }

      closeCustomModal(){
          this.closeModal.emit();
      }
}
