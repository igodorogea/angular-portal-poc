import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { NavButtonsDirective } from './nav-buttons.directive';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavButtonsDirective],
  template: `
    <p>content works!</p>
    @if (visible()) {
      <p>Toggleable content</p>
    }
    <ng-template appNavButtons="asdf">
      <button (click)="visible.set(!visible())">Count {{ count() }}</button>
    </ng-template>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  visible = signal(false);
  count = signal(0);
  constructor() {
    setInterval(() => this.count.set(this.count() + 1), 1000);
  }
}
