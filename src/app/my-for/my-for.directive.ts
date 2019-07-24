import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {
    this.view.clear();
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
    console.log(collection);
  }

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

}
