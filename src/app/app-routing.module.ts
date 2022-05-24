import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'data', component: DataBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CursosModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
