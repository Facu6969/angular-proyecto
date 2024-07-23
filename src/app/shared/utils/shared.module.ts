import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraGrandeDirective } from '../directivas/cabecera-grande.directive';
import { NombreCompletoPipe } from '../pipes/nombre-completo.pipe';



@NgModule({
  declarations: [
    CabeceraGrandeDirective,
    NombreCompletoPipe
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
