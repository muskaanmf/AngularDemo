import { Directive, Input } from '@angular/core';
import { CustomvalidationService } from '../services/customvalidation.service';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting:MatchPasswordDirective, multi: true }]
})
export class MatchPasswordDirective implements Validator{
  @Input('appMatchPassword') MatchPassword: string[]= [];
  constructor(private customValidator: CustomvalidationService) { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null{
    return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1]);
  }

}
