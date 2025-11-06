import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputFields } from '../controller/input-fields/input-fields';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-page',
  imports: [InputFields, CommonModule, ReactiveFormsModule],
  templateUrl: './company-page.html',
  styleUrl: './company-page.css'
})
export class CompanyPage {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {
    if (this.form.valid) {
      alert('Form submitted: ' + JSON.stringify(this.form.value));
    } else {
      alert('Form is invalid');
    }
  }

}
