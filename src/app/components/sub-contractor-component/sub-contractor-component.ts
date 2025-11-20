import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sub-contractor-component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './sub-contractor-component.html',
  styleUrl: './sub-contractor-component.css',
})
export class SubContractorComponent {

  subContractForm: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.subContractForm = this.fb.group({
      companyName: ['', Validators.required],
      specialization: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      gstNo: [''],
      companySize: [''],
      state: [''],
      city: [''],
      collaborationTerms: [''],
      remarks: ['']
    });
  }

  submitForm() {
    if (this.subContractForm.invalid) {
      this.subContractForm.markAllAsTouched();
      return;
    }

    this.http.post("http://localhost:4000/api/SubContractor", this.subContractForm.value)
      .subscribe({
        next: () => {
          alert("Sub-Contractor Added Successfully!");
          this.subContractForm.reset();
        },
        error: err => alert("Error: " + err.message)
      });
  }
}


