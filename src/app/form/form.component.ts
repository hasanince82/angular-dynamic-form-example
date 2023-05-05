import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  myForm: FormGroup;
  isAdditionalField: boolean = false;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
    });
  }

  toggleAdditionalField(checked: boolean) {
    console.log(this.isAdditionalField);
    if (checked) {
      this.myForm.addControl(
        'additionalField',
        this.fb.control('', [Validators.required])
      );
    } else {
      this.myForm.removeControl('additionalField');
    }
  }

  onSubmit() {
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
