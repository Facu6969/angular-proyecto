import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})
export class DialogoComponent {
  cursoForm: FormGroup;

  constructor(private fb:FormBuilder, private matDialogRef: MatDialogRef<DialogoComponent>) {
    this.cursoForm = this.fb.group({
      name: [null, Validators.required], //estilos de error
      startDate: [],
      endDate: [],
    });
  }

  onSubmit(): void {
    console.log(this.cursoForm.value);

    this.matDialogRef.close(this.cursoForm.value);
  }
}
