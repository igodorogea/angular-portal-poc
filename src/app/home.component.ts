import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavButtonsDirective } from './nav-buttons.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavButtonsDirective],
  template: `
    <p>Home page works!</p>
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
export class HomeComponent {
  visible = signal(false);
  count = signal(0);
  constructor() {
    setInterval(() => this.count.set(this.count() + 1), 1000);
  }
}
