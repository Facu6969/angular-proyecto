import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../Features/dashboard/students/alumno.model';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: Alumno, parte: string = 'completo'): string {
    console.log("Alumno recibido en el pipe:", alumno);
    
    if (!alumno) {
      console.error("Objeto alumno nulo:", alumno);
      return 'Información no disponible';
    }

    switch (parte) {
      case 'nombre':
        return alumno.nombre || 'Nombre no disponible';
      case 'apellido':
        return alumno.apellido || 'Apellido no disponible';
      case 'completo':
        if (!alumno.nombre || !alumno.apellido) {
          console.error("Datos incompletos:", alumno);
          return 'Nombre completo no disponible';
        }
        return `${alumno.nombre} ${alumno.apellido}`;
      default:
        return 'Opción no válida';
    }
  }

}
