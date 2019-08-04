import { ValidatorFn, AbstractControl } from '@angular/forms';
​
// à travailler ...
export const nomRestaurantValide: ValidatorFn = (control: AbstractControl):  {[key: string]: boolean} | null => {

    // si invalide
    if (control.value !== undefined) {
        return {
            'truc': true
        };
    }

    // si valide
    return null;

};
