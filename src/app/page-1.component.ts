import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavButtonsDirective } from './nav-buttons.directive';

@Component({
  selector: 'app-page-1',
  standalone: true,
  imports: [NavButtonsDirective],
  template: `
    <p>Page 1 works!</p>
    @if (visible()) {
      <p>Toggleable content</p>
    }
    <ng-template appNavButtons="asdf">
      <button (click)="visible.set(!visible())">Another count {{ count() }}</button>
    </ng-template>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component {
  visible = signal(false);
  count = signal(0);
  constructor() {
    setInterval(() => this.count.set(this.count() - 1), 1000);
  }
}
