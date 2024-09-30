import { Directive, input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ButtonsPortalService } from './buttons-portal.service';

@Directive({
  selector: '[appNavButtons]',
  standalone: true,
})
export class NavButtonsDirective implements OnInit, OnDestroy {
  appNavButtons = input<string | undefined>();

  constructor(
    private _buttonsPortalService: ButtonsPortalService,
    private _templateRef: TemplateRef<any>,
  ) {}

  ngOnInit(): void {
    this._buttonsPortalService.set(this._templateRef, this.appNavButtons());
  }

  ngOnDestroy(): void {
    this._buttonsPortalService.set(null);
  }
}
