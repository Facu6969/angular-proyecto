import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnoService } from '../../../../core/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { AlumnoModalFormComponent } from '../../../../shared/alumno-modal-form/alumno-modal-form.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
})

export class AlumnoListComponent implements OnInit {
  displayedColumns: String[] = ['id', 'nombre', 'apellido', 'edad', 'curso', 'actions'];
  dataSource = new MatTableDataSource<Alumno>();

  constructor(private alumnoService: AlumnoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAlumnos();
  }

  loadAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (error) => console.error('Error al obtener alumnos', error)
    });
  }

  addAlumno(): void {
    const dialogRef = this.dialog.open(AlumnoModalFormComponent, {
      width: '400px',
      data: { alumno: { id: null, nombre: '', apellido: '', edad: null, curso: '' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.addAlumno(result);
        this.loadAlumnos(); // Actualizar lista de alumnos
      }
    });
  }

  editAlumno(alumno: Alumno): void {
    const dialogRef = this.dialog.open(AlumnoModalFormComponent, {
      width: '400px',
      data: { alumno }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.updateAlumno(result);
        this.loadAlumnos(); 
      }
    });
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas eliminar este alumno?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.deleteAlumno(id);
        this.loadAlumnos();
      }
    });
  }
}