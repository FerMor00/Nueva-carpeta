import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargarScriptsService } from './cargar-scripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from '../producto/producto.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    MenuPrincipalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
