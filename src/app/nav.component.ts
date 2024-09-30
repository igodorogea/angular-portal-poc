import { CdkPortalOutlet } from '@angular/cdk/portal';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, TemplateRef } from '@angular/core';
import { ButtonsPortalService } from './buttons-portal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CdkPortalOutlet,
    NgTemplateOutlet,
  ],
  template: `
    <p>nav works!</p>
    <p>
      Buttons:
      <ng-container [ngTemplateOutlet]="buttonsTemplate()"></ng-container>
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  name = input<string | undefined>();

  buttonsTemplate = computed(() => {
    return this._buttonsPortalService.get(this.name())();
  });

  constructor(private _buttonsPortalService: ButtonsPortalService) {}
}
