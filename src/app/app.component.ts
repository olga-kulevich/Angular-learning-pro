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
      <ng-container
      [ngTemplateOutlet]="tmpl" >
      </ng-container>
      <ng-template #tmpl let-name let-foo let-location="location">
        Todd Motto
      </ng-template>
    </div>
  `
})
export class AppComponent {

}
