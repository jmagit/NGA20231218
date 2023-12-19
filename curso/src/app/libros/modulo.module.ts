import { NgModule } from '@angular/core';
import { LIBROS_COMPONENTES, LibrosAddComponent, LibrosComponent, LibrosEditComponent, LibrosListComponent, LibrosViewComponent } from './componente.component';
import { RouterModule, Routes } from '@angular/router';
import { InRoleCanActivate } from '../security';

export const routes: Routes = [
  { path: '', component: LibrosListComponent, canActivate: [ InRoleCanActivate('Administradores')] },
  { path: 'add', component: LibrosAddComponent },
  { path: ':id/edit', component: LibrosEditComponent },
  { path: ':id', component: LibrosViewComponent },
  { path: ':id/:kk', component: LibrosViewComponent },
]
@NgModule({
  declarations: [],
  imports: [ LibrosComponent, LIBROS_COMPONENTES, RouterModule.forChild(routes) ],
  exports: [ LibrosComponent, RouterModule ]
})
export class LibrosModule { }
