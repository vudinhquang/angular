import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[zvnCollapsed]',
  exportAs: 'zvnCollapsed'
})

export class CollapsedDirective {
  @HostBinding('class.is-collapsed') isCollapsed: boolean;

  @Input("zvnCollapsed") set zvnCollapsed(value: boolean) {
    if(value===false) {
      this.isCollapsed=false;
    } else {
      this.isCollapsed=true;
    }
  }

	@HostListener('click') toogle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
