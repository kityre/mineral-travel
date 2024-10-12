import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedDivComponent } from './animated-div/animated-div.component'; // Chemin vers votre composant

@NgModule({
  declarations: [AnimatedDivComponent],  // Déclaration de votre composant
  imports: [
    CommonModule  // Importation du module commun
  ],
  exports: [AnimatedDivComponent]  // Exportation pour utilisation dans d'autres modules
})
export class ComponentModule { }