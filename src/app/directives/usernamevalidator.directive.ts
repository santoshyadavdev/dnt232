import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[dntUsernamevalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UsernamevalidatorDirective, multi: true }]
})
export class UsernamevalidatorDirective implements Validator {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control && control.value) {
      if (control.value.includes('test')) {
        this.renderer.setStyle(this.el.nativeElement, 'border-color' , 'red');
        return { invalidName: true }
      }
    }

    return null;
  }

}
