import { Component, Output } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'cms';
    modalForm = false;
    updatedEmployees = [];
    existingEmpData = {};
    employees = [
          {"id":1, "firstname":"Suresh", "lastname":"Raina", "age":25, "salary":"25,0000,00", "joiningdate":"Apr 30, 2018", "status":0},
          {"id":2, "firstname":"Sourav", "lastname":"Gangly", "age":32, "salary":"45,0000,00", "joiningdate":"July 10, 2018", "status":1},
          {"id":3, "firstname":"Hardik", "lastname":"Pandya", "age":27, "salary":"10,0000,00", "joiningdate":"May 10, 2020", "status":2}
    ];
    

    addRow(){
        //setting here new object for employee records
        //this.updatedEmployees = Object.assign([], this.employees);
        //this.updatedEmployees.push(this.employees[0]);
        //this.employees = this.updatedEmployees;
        //console.log(this.updatedEmployees);
    }

    addEmpForm(){
        this.modalForm = !this.modalForm;
        this.existingEmpData = "";
    }

    toggleModal(modalFlag){
        console.log("toggleModal method triggered");
        this.modalForm = modalFlag;
    }

    setEmpData(empUniqueRowData){
        console.log("app.component", empUniqueRowData);
        // if(empUniqueRowData.empId && empUniqueRowData.empId > 0){
        //     this.updatedEmployees = Object.assign([], this.employees);
        //     console.log("method before setEmpData", this.updatedEmployees);
        //     this.updatedEmployees = this.updatedEmployees.map(function(row, index){
        //                                 return (row.id === empUniqueRowData.empId) ? empUniqueRowData : row
        //                             });

        //     console.log("execution for updating record", this.updatedEmployees);
        //     this.employees = this.updatedEmployees;

        // }else{
            console.log("Display data in the update record form", empUniqueRowData);
            this.existingEmpData = empUniqueRowData;
        //}
        //console.log("method setEmpData", this.existingEmpData);
    }

    updateEmpData(formData){
            console.log("method before updateEmpData", this.updatedEmployees);
            // this.employees.find(item => {
            //     if (item.id === formData.empId) {
            //         item = formData;
            //         // item.id = formData.empId;
            //     }
            // });
            this.updatedEmployees = Object.assign([], this.employees);
            this.updatedEmployees = this.updatedEmployees.map(function(row, index){
                                        return (row.id === formData.empId) ? formData : row;
                                    });
            this.employees = this.updatedEmployees;
            console.log("method before updateEmpData", this.updatedEmployees);
    }

    getEmpData(formData){
        console.log("App component getEmpData", formData);
        if(formData.id && formData.id > 0){
            console.log("If emp data updated", formData);
            this.updateEmpData(formData);
        }else{
            console.log("else emp data updated", formData);
            this.employees.push(formData);
        }
        this.modalForm = !this.modalForm;
    }


    deleteEmp(empObj){
        console.log("record before delteion", this.employees);
        let itemindex = this.employees.findIndex(item => item.id === empObj.id);
        console.log("delete record of index", itemindex);
        this.employees.splice(itemindex, 1);
        console.log("record after delteion", this.employees);
    }
}
