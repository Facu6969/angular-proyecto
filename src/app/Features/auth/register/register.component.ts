import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggleHide(): void {
    this.hide = !this.hide;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { role, email, password } = this.registerForm.value;
      const success = this.authService.register(role, email, password);
      if (success) {
        this.router.navigate(['/auth/login']);
      } else {
        console.error('Error en el registro');
      }
    }
  }
}
