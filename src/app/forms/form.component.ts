import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-comp',
    templateUrl: './form.component.html',
})

export class FormComponent {
    name: string;
    isMarried = false;
    isTCAccepted: boolean;
    userForm = new FormGroup({
        married: new FormControl(false),
        tc: new FormControl('', Validators.required)
     });

    constructor () {

    }
    onFormSubmit(form: NgForm) {
        this.isMarried = form.controls['married'].value;
        this.isTCAccepted = form.controls['tc'].value;

        console.log(this.isMarried);
        console.log(this.isTCAccepted);
     }
}
