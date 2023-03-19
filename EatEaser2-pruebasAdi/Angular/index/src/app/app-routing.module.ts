import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { ProductoComponent } from '../producto/producto.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [{
  path: '',
  component: MenuPrincipalComponent,
},{
  path: 'producto',
  component: ProductoComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
