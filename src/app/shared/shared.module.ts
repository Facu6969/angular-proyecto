import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { CabeceraGrandeDirective } from './directivas/cabecera-grande.directive';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    CabeceraGrandeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraGrandeDirective,
    NombreCompletoPipe
  ]
})
export class SharedModule { }
