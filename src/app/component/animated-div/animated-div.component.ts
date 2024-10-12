import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animated-div',
  template: `
    <div class="animated-div" @slideInOut>
      Contenu animé
    </div>
  `,
  styles: [`
    .animated-div {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 20px;
    }
  `],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in <=> out', animate(300)),
    ])
  ]
})
export class AnimatedDivComponent { 
  isMoved = false;  // État pour contrôler l'animation

  toggleMove() {
    this.isMoved = !this.isMoved;  // Changer l'état pour activer/désactiver l'animation
  }
}