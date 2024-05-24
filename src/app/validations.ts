import { AbstractControl } from "@angular/forms";

export function minusculoValidacao(control: AbstractControl) {
    let autoria: string = control.value
    if(autoria !== autoria.toLowerCase()) {
        return { minusculo: true }
    }
    return null;
}