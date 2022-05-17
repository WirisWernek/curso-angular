import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from './cursos/cursos.module';

const routes: Routes = [{ path: '', component: CursosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), CursosModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
