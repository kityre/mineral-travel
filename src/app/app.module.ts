import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';  // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [
    AppComponent  // Déclarez votre composant principal ici
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule  // Assurez-vous que votre module est bien importé ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }