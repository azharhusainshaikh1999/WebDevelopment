import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CityStateService } from '../../shared/city-state';
import { State, City, IState, ICity } from 'country-state-city';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vendor-component',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './vendor-component.html',
  styleUrls: ['./vendor-component.css'],
})
export class VendorComponent implements OnInit {
  vendorForm!: FormGroup;

  states: IState[] = [];
  cities: ICity[] = [];

  selectedStateCode?: string;

  constructor(private fb: FormBuilder, private cityStateService: CityStateService, private router: Router) { }

  ngOnInit() {
    this.vendorForm = this.fb.group({
      vendorName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialization: [''],
      state: [''],
      city: [''],
      contactNumber: ['', [Validators.pattern('^[0-9]{10}$')]],
      gstNo: ['', Validators.pattern('^[0-9]{15}$')],
      ifsc: ['', Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')],
      accountNo: ['', Validators.pattern('^[0-9]{9,18}$')],
      creditTerms: [''],
      qualityRating: [''],
      projectsCompleted: [''],
      remarks: ['']
    });

    this.states = State.getStatesOfCountry('IN'); // Load states of India on init
  }

  onStateChange(event: Event) {
    const stateCode = (event.target as HTMLSelectElement).value;
    this.selectedStateCode = stateCode;
    this.cities = City.getCitiesOfState('IN', stateCode);
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      console.log('Form Value:', this.vendorForm.value);
      alert('Vendor form submitted successfully!');
    } else {
      alert('Please correct the errors in the form.');
      this.vendorForm.markAllAsTouched();
    }
  }
}
