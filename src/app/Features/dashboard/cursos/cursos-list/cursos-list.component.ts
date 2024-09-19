import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../curso.model';
import { CursosService } from '../../../../core/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})

export class CursosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'actions'];
  dataSource = new MatTableDataSource<Curso>();

  constructor(private cursosService: CursosService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.cursosService.getCursos().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (error) => console.error('Error al obtener cursos', error)
    });
  }

  addCurso(): void {
    const dialogRef = this.dialog.open(CursosFormComponent, {
      width: '400px',
      data: { curso: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursosService.addCurso(result);
        this.loadCursos();
      }
    });
  }

  editCurso(curso: Curso): void {
    const dialogRef = this.dialog.open(CursosFormComponent, {
      width: '400px',
      data: { curso }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursosService.updateCurso(result);
        this.loadCursos();
      }
    });
  }

  confirmDelete(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas eliminar este curso?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursosService.deleteCurso(id);
        this.loadCursos();
      }
    });
  }
}