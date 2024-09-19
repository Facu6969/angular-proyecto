import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params, UrlSegment } from '@angular/router';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isAuthenticated', 'getUserRole']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
  });

  // Simulación de un ActivatedRouteSnapshot más completo
  const route: ActivatedRouteSnapshot = {
    url: [] as UrlSegment[],
    params: {} as Params,
    queryParams: {} as Params,
    fragment: null,
    data: { role: 'Admin' }, // Esta es la parte importante que necesitas probar
    outlet: '',
    component: null,
    routeConfig: null,
    root: null!,
    parent: null!,
    firstChild: null!,
    children: [],
    pathFromRoot: [],
    paramMap: null!,
    queryParamMap: null!
  } as unknown as ActivatedRouteSnapshot;

  const state = {} as RouterStateSnapshot;

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should return true if the user is authenticated and role matches', () => {
    authService.isAuthenticated.and.returnValue(true);  // Simula autenticación
    authService.getUserRole.and.returnValue('Admin');  // Simula rol de Admin

    expect(authGuard.canActivate(route, state)).toBe(true);
  });

  it('should navigate to login if the user is not authenticated', () => {
    const navigateSpy = spyOn(router, 'navigate');
    authService.isAuthenticated.and.returnValue(false);  // Usuario no autenticado

    expect(authGuard.canActivate(route, state)).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should navigate to login if the user role does not match', () => {
    const navigateSpy = spyOn(router, 'navigate');
    authService.isAuthenticated.and.returnValue(true);  // Usuario autenticado
    authService.getUserRole.and.returnValue('Alumno');  // Simula que el usuario es un Alumno

    expect(authGuard.canActivate(route, state)).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login']);
  });
});
