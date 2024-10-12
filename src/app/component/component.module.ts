import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedDivComponent } from './animated-div/animated-div.component'; // Vérifiez que le chemin est correct
import { TestAnimatedDivComponent } from './test-animated-div/test-animated-div.component';

@NgModule({
  declarations: [AnimatedDivComponent, TestAnimatedDivComponent], // Ajoutez le nouveau composant ici
  imports: [
    CommonModule
  ],
  exports: [AnimatedDivComponent, TestAnimatedDivComponent] // Exportez également le nouveau composant
})
export class ComponentModule { }