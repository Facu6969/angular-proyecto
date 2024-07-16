import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './componente/dialogo/dialogo.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  nombreCurso = "";

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
    .open(DialogoComponent)
    .afterClosed()
    .subscribe({
      next: (value) =>{
        console.log("recibimos el valor: ", value);

        this.nombreCurso = value.name
      },
    });
  }
}