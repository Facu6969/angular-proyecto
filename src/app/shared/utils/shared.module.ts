import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraGrandeDirective } from '../directivas/cabecera-grande.directive';
import { NombreCompletoPipe } from '../pipes/nombre-completo.pipe';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoModalFormComponent } from '../alumno-modal-form/alumno-modal-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CabeceraGrandeDirective,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    AlumnoModalFormComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule

  ],
  exports: [
    CabeceraGrandeDirective,
    CommonModule,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    AlumnoModalFormComponent,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class SharedModule { }
