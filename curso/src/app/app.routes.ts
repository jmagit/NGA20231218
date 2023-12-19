import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, Routes } from '@angular/router';

// Para que no reutilice los componentes si la ruta llega al mismo componente
export class NotRouteReuseStrategy extends BaseRouteReuseStrategy {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean { return false; }
}

export const routes: Routes = [];
