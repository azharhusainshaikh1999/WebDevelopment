import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, AbstractControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityStateService } from '../../shared/city-state';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-component',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './service-component.html',
  styleUrls: ['./service-component.css'],
})

export class ServiceComponent implements OnInit {

  labourForm: any;
  selectedImage: any = null;
  selectedCert: any = null;

  states: IState[] = [];
  cities: ICity[] = [];

  selectedStateCode?: string;

  constructor(private cityStateService: CityStateService, private router: Router) { }

   ngOnInit() {
    this.labourForm = new FormGroup({
      // Define form controls with initial values and validators if needed
      labourNameControl: new FormControl('', Validators.required),
      imageControl: new FormControl('', this.imageTypeValidator()),
      certControl: new FormControl('', Validators.required),
      requiredControl: new FormControl('', Validators.required),
      notRequiredControl: new FormControl('')
    });
    this.states = State.getStatesOfCountry('IN'); // Load states of India on init
  }

  onStateChange(event: Event) {
  const stateCode = (event.target as HTMLSelectElement).value;
  this.selectedStateCode = stateCode;
  this.cities = City.getCitiesOfState('IN', stateCode);
  }

  onImageSelect(event: any) {
    this.selectedImage = event.target.files[0] ?? null;
  }

    // Custom validator function defined inside the component
  imageTypeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
      const file = control.value;

      if (!file) {
        return null; // no file selected yet, so valid
      }

      if (file && allowedTypes.includes(file.type)) {
        // valid file type
        return null;
      } else {
        // invalid file type
        return { invalidFileType: true };
      }
    };
  }

  onCertSelect(event: any) {
    this.selectedCert = event.target.files[0] ?? null;
  }

  

  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.previewUrl = e.target?.result ?? null;
      };
      reader.readAsDataURL(file);
      this.labourForm.get('imageControl')?.setValue(file);
      this.labourForm.get('imageControl')?.markAsTouched();
    } else {
      this.previewUrl = null;
      this.labourForm.get('imageControl')?.setValue(null);
      this.labourForm.get('imageControl')?.markAsTouched();
    }
  }

  removeImage(fileInput?: HTMLInputElement | null) {
    this.previewUrl = null;
    this.selectedImage = null;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  submitForm(){
    console.log(this.labourForm.value);
  }

}
