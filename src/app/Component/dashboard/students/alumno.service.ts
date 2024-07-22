import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from './alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 20, curso: 'Angular' },
    { id: 2, nombre: 'Ana', apellido: 'García', edad: 30, curso: 'React' },
    { id: 3, nombre: 'Andres', apellido: 'Gonzalez', edad: 25, curso: 'JavaScript' },
    { id: 4, nombre: 'Facundo', apellido: 'Fernandez', edad: 36, curso: 'UX/UI' },
    { id: 5, nombre: 'Ana', apellido: 'Tylor', edad: 44, curso: 'Angular' },
    { id: 6, nombre: 'Sofia', apellido: 'Terry', edad: 22, curso: 'BackEnd' },
    { id: 7, nombre: 'Nahuel', apellido: 'Loscalzo', edad: 19, curso: 'FrontEnd' },
    { id: 8, nombre: 'Wolder', apellido: 'Frey', edad: 80, curso: 'React' }
    
  ];

  constructor() {}

  getAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  addAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  updateAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
    }
  }

  deleteAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }
}
