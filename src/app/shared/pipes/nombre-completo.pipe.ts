import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../Component/dashboard/students/alumno.model';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: Alumno): string {
    console.log("Alumno:", alumno);
    if (!alumno || !alumno.nombre || !alumno.apellido){
      return 'nombre no disponible';
    }
    return `${alumno.nombre} ${alumno.apellido}`;
    
  }

}
