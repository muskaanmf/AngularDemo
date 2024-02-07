import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor() { }

  MatchPassword(pass: string, confirm: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[pass];
      const confirmPassword = formGroup.controls[confirm];
      if (!passwordControl || !confirmPassword) return null;


      if (confirmPassword.errors) return null;
      if (passwordControl.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMisMatch: true });
      } else {
        confirmPassword.setErrors({ passwordMisMatch: false })
      }
    }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any | undefined } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])@[a-z].[a-z]$');
      const valid = regex.test(control.value);
      return valid ? null as any : { invalidEmail: true }
    };
  }

  passwordPatternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any | undefined } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8, 15}$');
      const valid = regex.test(control.value);
      return valid ? null as any : { invalidPassword: true }
    };
  }
}
