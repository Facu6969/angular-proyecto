import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosComponent } from './cursos.component';
import { MatSelectModule } from '@angular/material/select';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


@NgModule({
  declarations: [
    CursosListComponent,
    CursosComponent,
    CursosFormComponent
  ],

  imports: [
    CommonModule,
    CursosRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule
  ],
  exports: [
    CursosFormComponent,
    CursosListComponent
  ]
})
export class CursosModule { }
