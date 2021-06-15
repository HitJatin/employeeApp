import { AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nameCaseValidator(name :RegExp) : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const nameCase = name.test(control.value);
        return nameCase ? {nameCase: {value: control.value}} : null;
    };
}