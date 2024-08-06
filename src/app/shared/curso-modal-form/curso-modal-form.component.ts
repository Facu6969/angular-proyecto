import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../Component/dashboard/cursos/curso.model';

@Component({
  selector: 'app-curso-modal-form',
  templateUrl: './curso-modal-form.component.html',
  styleUrl: './curso-modal-form.component.scss'
})
export class CursoModalFormComponent implements OnInit {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursoModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { curso: Curso }
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.data.curso) {
      this.cursoForm.patchValue(this.data.curso);
    }
  }

  onSave(): void {
    if (this.cursoForm.valid) {
      this.dialogRef.close(this.cursoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
