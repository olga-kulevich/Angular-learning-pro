import {
  Component,
  Output,
  ViewChild,
  AfterViewInit,
  EventEmitter,
  ContentChildren,
  AfterContentInit,
  QueryList,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';

import {AuthRememberComponent} from './auth-remember.component';
import {AuthMessageComponent} from "./auth-message.component";

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        
        <ng-content select="auth-remember"></ng-content>
        
        <auth-message 
          [style.display]="showMessage ? 'inherit' : 'none'">
        </auth-message>
        
        <ng-content select="button"></ng-content>

      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit{

  showMessage: boolean;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @ViewChild('email', {static: true}) email: ElementRef;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    console.log(this.email.nativeElement.setAttribute('placeholder', 'Enter mail address'));

    if (this.message) {
      this.message.forEach((message) => {
        message.days = 30;
      });
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => this.showMessage = checked);
      });
      //this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
