import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CursosModule } from './cursos/cursos.module';
import {MatListModule} from '@angular/material/list';
import { StudentsRoutingModule } from './students/students-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CursosModule,
    MatListModule,
    StudentsRoutingModule

  ]
})
export class DashboardModule { }
