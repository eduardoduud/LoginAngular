import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[syncWidth]'
})
export class SyncWidthDirective implements OnInit {
  @Input() sourceElementId: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const sourceElement = document.getElementById(this.sourceElementId);
    const targetElement = this.elementRef.nativeElement;
    if (sourceElement && targetElement) {
      const sourceWidth = sourceElement.offsetWidth;
      targetElement.style.width = `${sourceWidth}px`;
    }
  }
}
