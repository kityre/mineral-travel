import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-test-animated-div',
  template: `
    <div class="animated-div" @slideInOut>
      Test Contenu Animé
    </div>
  `,
  styles: [`
    .animated-div {
      width: 200px;
      height: 200px;
      background-color: lightcoral;
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
export class TestAnimatedDivComponent { }