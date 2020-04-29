import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeformComponent } from './employee/employeeform/employeeform.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenusidebarComponent } from './common/menusidebar/menusidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeformComponent,
    MenusidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
