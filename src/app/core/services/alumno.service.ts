import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../../Component/dashboard/students/alumno.model';

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

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  private alumnoEditSubject = new BehaviorSubject<Alumno | null>(null);

  constructor() {}

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  addAlumno(alumno: Omit<Alumno, 'id'>): void {
    const newId = this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
    const newAlumno: Alumno = { id: newId, ...alumno };
    this.alumnos.push( newAlumno );
    this.alumnosSubject.next(this.alumnos);//nuevo estado
  }

  updateAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos[index] = alumno;
      this.alumnosSubject.next(this.alumnos);//nuevo estado
    }
  }

  deleteAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    this.alumnosSubject.next(this.alumnos); //nuevo estado
  }

  getAlumnoEdit(): Observable<Alumno | null> {
    return this.alumnoEditSubject.asObservable();
  }

  editAlumno(alumno: Alumno): void {
    this.alumnoEditSubject.next(alumno);
  }
}
