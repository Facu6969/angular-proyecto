import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Curso } from "../../Features/dashboard/cursos/curso.model";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [];
  private cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);

  constructor() {}

  getCursos(): Observable<Curso[]> {
    return this.cursosSubject.asObservable();
  }

  addCurso(curso: Omit<Curso, 'id'>): void {
    const newId = this.generateNewId();
    console.log('Nuevo ID generado:', newId);  
    const newCurso: Curso = { id: newId, ...curso };  
    console.log('Curso añadido:', newCurso);  
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
    console.log('Curso eliminado, ID:', id);
  }

  private generateNewId(): number {
    const maxId = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id ?? 0)) : 0;
    return maxId + 1;
}
}