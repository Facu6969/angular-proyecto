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


@NgModule({
  declarations: [
    CabeceraGrandeDirective,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    AlumnoModalFormComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  exports: [
    CabeceraGrandeDirective,
    NombreCompletoPipe,
    ConfirmDialogComponent,
    AlumnoModalFormComponent
  ]
})
export class SharedModule { }
