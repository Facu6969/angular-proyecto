import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../../../../core/services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
})
export class AlumnoListComponent implements OnInit {
  displayedColumns: String[] = ['id', 'nombre', 'apellido', 'edad', 'curso', 'actions'];
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.alumnos = data,
      error: (error) => console.error('Error al obtener alumnos', error)
    });
  }

  edit(alumno: Alumno): void {
    this.alumnoService.editAlumno(alumno);
  }

  delete(id: number): void {
    this.alumnoService.deleteAlumno(id);
  }
}
