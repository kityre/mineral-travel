import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module'; // Assurez-vous que ce chemin est correct

@NgModule({
  declarations: [
    AppComponent // Déclaration de AppComponent ici
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule // Assurez-vous d'importer le module contenant AnimatedDivComponent
  ],
  providers: [],
  bootstrap: [AppComponent] // Démarrage de l'application avec AppComponent
})
export class AppModule { }