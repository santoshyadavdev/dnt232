import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dntHover]'
})
export class HoverDirective implements OnInit {

  @Input('dntHover') hoverColor = 'red';

  @Input() mouseoutColor = 'white';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log(el.nativeElement);
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = "green";
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green')
  }

  @HostListener('mouseover') onmouseover() {
    // console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.hoverColor)
  }

  @HostListener('mouseout') onmouseout() {
    // console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.mouseoutColor)
  }

  @HostListener('click') onClick() {
    // console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'steelblue')
  }

}
