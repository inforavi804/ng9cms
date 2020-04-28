import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    @Input() emp;
    @Output() populatedEmp:EventEmitter<any> = new EventEmitter();
    @Output() updatedEmp:EventEmitter<any> = new EventEmitter();
    @Output() deleteEmp:EventEmitter<any> = new EventEmitter();
    @Output() showModal:EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    updateEmpDetails(){
        //alert("updateEmpDetails");
        //let empData = this.emp;
        this.showModal.emit(true);
        this.populatedEmp.emit(this.emp);
        //alert("modal open method triggered");
        //this.emp.firstname = "__" + this.emp.firstname + "__";
        //this.updatedEmp.emit(this.emp);
    }

    deleteEmpDetails(){
        this.deleteEmp.emit(this.emp);
    }
}
