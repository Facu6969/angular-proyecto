// alumno-form.component.ts
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../../core/services/alumno.service';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoModalFormComponent } from '../../../../shared/alumno-modal-form/alumno-modal-form.component';

@Component({
  selector: 'app-alumno-form',
  template: '' 
})

export class AlumnoFormComponent implements OnInit {
  constructor(public dialog: MatDialog, private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.openModal();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AlumnoModalFormComponent, {
      width: '400px',
      data: { alumno: { id: null, nombre: '', apellido: '', edad: null, curso: '' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.alumnoService.addAlumno(result);
        console.log('Alumno agregado:', result);
      }
    });
  }
}
