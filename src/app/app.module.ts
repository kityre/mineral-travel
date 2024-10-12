import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module'; // Vérifiez le chemin

@NgModule({
  declarations: [
    AppComponent  // Déclaration de votre composant principal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule  // Assurez-vous que ce module est importé
  ],
  providers: [],
  bootstrap: [AppComponent]  // Démarrage avec AppComponent
})
export class AppModule { }