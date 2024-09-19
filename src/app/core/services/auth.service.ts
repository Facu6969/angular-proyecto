import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { role: 'Admin', email: 'admin@example.com', password: 'admin123' }
  ];

  private authenticatedUser: { role: string, email: string } | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.authenticatedUser = { role: user.role, email: user.email };
      return true;
    }
    return false;
  }

  register(role: string, email: string, password: string): boolean {
    const userExists = this.users.some(u => u.email === email);
    if (!userExists) {
      this.users.push({ role, email, password });
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser !== null;
  }

  logout(): void {
    this.authenticatedUser = null;
    this.router.navigate(['/auth/login']);  // Redirige al login después de cerrar sesión
  }

  getUserRole(): string | null {
    return this.authenticatedUser ? this.authenticatedUser.role : null;
  }
}
