import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterContentInit,
  ComponentFactoryResolver, ComponentRef, TemplateRef
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <ng-template #tmpl>
        Todd Motto
      </ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl', {static: true, read: TemplateRef}) tmpl: TemplateRef<any>;

  component: ComponentRef<AuthFormComponent>;

  constructor() {}

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl);
  }
}
