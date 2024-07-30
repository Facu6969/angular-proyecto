import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.scss'
})
export class AlumnoFormComponent implements OnInit{
  alumnoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      edad: ['', [Validators.required, Validators.min(18)]],
      curso: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      console.log(this.alumnoForm.value);
      this.alumnoForm.reset();
    }
  }
  get nombre() { return this.alumnoForm.get('nombre'); }
  get apellido() { return this.alumnoForm.get('apellido'); }
  get edad() { return this.alumnoForm.get('edad'); }
  get curso() { return this.alumnoForm.get('curso'); }
}
