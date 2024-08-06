import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../curso.model';
import { CursosService } from '../../../../core/services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { CursoModalFormComponent } from '../../../../shared/curso-modal-form/curso-modal-form.component';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent implements OnInit {
  displayedColumns: String[] = [ 'id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin', 'actions' ];
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
    const dialogRef = this.dialog.open(CursoModalFormComponent, {
      width: '400px',
      data: { curso: { id: null, nombre: '', descripcion: '', fechaInicio: null, fechaFin: null } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursosService.addCurso(result);
        this.loadCursos();
      }
    });
  }

  editCurso(curso: Curso): void {
    const dialogRef = this.dialog.open(CursoModalFormComponent, {
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
