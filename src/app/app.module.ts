import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModule } from './Component/auth/login/login.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { DashboardModule } from './Component/dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './shared/utils/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    DashboardModule,
    MatDialogModule,
    RouterModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
