import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../curso.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})

export class CursosFormComponent implements OnInit {
  cursoForm: FormGroup;
  cursoOptions: string[] = ['Angular', 'Backend', 'UX/UI', 'JavaScript'];
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursosFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { curso: Curso | null }
    
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });

    if (this.data.curso) {
      this.initializeForm(this.data.curso);
    }
  }

  ngOnInit(): void {}

  initializeForm(curso: Curso): void {
    this.cursoForm.patchValue({
      nombre: curso.nombre,
      descripcion: curso.descripcion,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin
    });
  }

  onSave(): void {
    if (this.cursoForm.valid) {
        const updatedCurso: Omit<Curso, 'id'> = {
            nombre: this.cursoForm.value.nombre,
            descripcion: this.cursoForm.value.descripcion,
            fechaInicio: new Date(this.cursoForm.value.fechaInicio),
            fechaFin: new Date(this.cursoForm.value.fechaFin)
        };
        this.dialogRef.close(updatedCurso);
    }
}

  onCancel(): void {
    this.dialogRef.close();
  }
}
