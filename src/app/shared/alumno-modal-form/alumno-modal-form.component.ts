import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../Component/dashboard/students/alumno.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-modal-form',
  templateUrl: './alumno-modal-form.component.html',
  styleUrls: ['./alumno-modal-form.component.scss']
})
export class AlumnoModalFormComponent implements OnInit {
  alumnoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AlumnoModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { alumno: Alumno },
    private fb: FormBuilder
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      edad: ['', [Validators.required, Validators.min(18)]],
      curso: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data.alumno) {
      this.alumnoForm.patchValue(this.data.alumno);
    }
  }

  onSave(): void {
    if (this.alumnoForm.valid) {
      const updatedAlumno: Alumno = {
        ...this.data.alumno,
        ...this.alumnoForm.value
      };
      this.dialogRef.close(updatedAlumno);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}