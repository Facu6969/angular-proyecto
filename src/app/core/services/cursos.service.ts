import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Curso } from "../../Component/dashboard/cursos/curso.model";

@Injectable({
    providedIn: 'root'
  })
  export class CursosService {
    private cursos: Curso[] = [
      { id: 1, nombre: 'Curso 1', descripcion: 'Descripción del curso 1', fechaInicio: new Date(), fechaFin: new Date() },
      { id: 2, nombre: 'Curso 2', descripcion: 'Descripción del curso 2', fechaInicio: new Date(), fechaFin: new Date() }
    ];
  
    private cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  
    constructor() {}
  
    getCursos(): Observable<Curso[]> {
      return this.cursosSubject.asObservable();
    }
  
    addCurso(curso: Omit<Curso, 'id'>): void {
      const newId = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id)) + 1 : 1;
      const newCurso: Curso = { id: newId, ...curso };
      this.cursos = [...this.cursos, newCurso];
      this.cursosSubject.next(this.cursos);
    }
  
    updateCurso(curso: Curso): void {
      const index = this.cursos.findIndex(c => c.id === curso.id);
      if (index !== -1) {
        this.cursos[index] = curso;
        this.cursos = [...this.cursos];
        this.cursosSubject.next(this.cursos);
      }
    }
  
    deleteCurso(id: number): void {
      this.cursos = this.cursos.filter(curso => curso.id !== id);
      this.cursosSubject.next(this.cursos);
    }
  }