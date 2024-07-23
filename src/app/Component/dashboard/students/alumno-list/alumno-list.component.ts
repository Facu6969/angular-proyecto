import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../../students/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
})
export class AlumnoListComponent implements OnInit{
  displayedColumns: String[] = ['id','nombre', 'apellido', 'edad', 'curso', 'actions'];
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe(
      data => this.alumnos = data,
      error => console.error('Error al obtener alumnos', error)
    );
  }

  edit(alumno: Alumno): void {

  }

  delete(id: number): void {
    this.alumnoService.deleteAlumno(id);
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }
}
