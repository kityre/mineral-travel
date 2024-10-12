import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedDivComponent } from './animated-div/animated-div.component';  // Vérifiez le chemin

@NgModule({
  declarations: [AnimatedDivComponent],  // Déclaration du composant
  imports: [
    CommonModule  // Utilisez CommonModule pour les directives
  ],
  exports: [AnimatedDivComponent]  // Exportation pour être accessible dans d'autres modules
})
export class ComponentModule { }