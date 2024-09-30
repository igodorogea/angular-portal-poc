import {
  Injectable,
  Signal,
  signal,
  TemplateRef,
  WritableSignal,
} from '@angular/core';

const DEFAULT_NAME = 'DEFAULT_NAV_TOOLBAR_NAME';

@Injectable({
  providedIn: 'root',
})
export class ButtonsPortalService {
  private templatesMap = new Map<
    string,
    WritableSignal<TemplateRef<any> | null>
  >();

  set(templateRef: TemplateRef<any> | null, name: string = DEFAULT_NAME): void {
    if (this.templatesMap.has(name)) {
      this.templatesMap.get(name)!.set(templateRef);
    }
    this.templatesMap.set(name, signal(templateRef));
  }

  get(name: string = DEFAULT_NAME): Signal<TemplateRef<any> | null> {
    if (!this.templatesMap.has(name)) {
      this.templatesMap.set(name, signal(null));
    }
    return this.templatesMap.get(name)!.asReadonly();
  }
}
