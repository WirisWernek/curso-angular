import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule],
  providers: [CursosService]
})
export class CursosModule {}
