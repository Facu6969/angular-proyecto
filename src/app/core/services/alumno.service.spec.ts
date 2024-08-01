import { TestBed } from '@angular/core/testing';
import { AlumnoService } from './alumno.service';
import { Alumno } from '../../Component/dashboard/students/alumno.model';

describe('AlumnoService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial alumnos', (done: DoneFn) => {
    service.getAlumnos().subscribe(alumnos => {
      expect(alumnos.length).toBe(8);
      done();
    });
  });

  it('should add a new alumno', (done: DoneFn) => { //Prueba de Adición de un Nuevo Alumno
    const newAlumno: Alumno = { id: 9, nombre: 'Test', apellido: 'User', edad: 25, curso: 'Testing' };
    service.addAlumno(newAlumno);
    service.getAlumnos().subscribe(alumnos => {
      expect(alumnos.length).toBe(9);
      expect(alumnos.find(a => a.id === newAlumno.id)).toEqual(newAlumno);
      done();
    });
  });

  it('should delete an alumno', (done: DoneFn) => {
    service.deleteAlumno(1);
    service.getAlumnos().subscribe(alumnos => {
      expect(alumnos.length).toBe(7);
      expect(alumnos.find(a => a.id === 1)).toBeUndefined();
      done();
    });
  });
});
