import {
  Component,
  ViewContainerRef,
  ViewChild,
  AfterContentInit,
  ComponentFactoryResolver, ComponentRef
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', {static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  component: ComponentRef<AuthFormComponent>;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);

    this.component.instance.title = 'Create account';

    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
