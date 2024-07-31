import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrl: './alumno-form.component.scss'
})

export class AlumnoFormComponent implements OnInit{
  alumnoForm!: FormGroup;
  alumnoId: number | null = null;

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
      edad: ['', [Validators.required, Validators.min(18)]],
      curso: ['', Validators.required]
    });

    this.alumnoService.getAlumnoEdit().subscribe(alumno => {
      this.alumnoId = alumno.id;
      this.alumnoForm.patchValue(alumno);
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = {
        id: this.alumnoId ? this.alumnoId : this.alumnoService.getAlumnos().subscribe(alumnos => alumnos.length + 1),
        ...this.alumnoForm.value
      };

      if (this.alumnoId) {
        this.alumnoService.updateAlumno(alumno);
      } else {
        this.alumnoService.addAlumno(alumno);
      }
      
      this.alumnoForm.reset();
      this.alumnoId = null;
    }
  }
  
}
