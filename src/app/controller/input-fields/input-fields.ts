import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-fields',
  imports: [CommonModule],
  templateUrl: './input-fields.html',
  styleUrl: './input-fields.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFields),
      multi: true,
    }
  ]
})
export class InputFields implements ControlValueAccessor {
  @Input() label: string = '';            // Label text input
  @Input() placeholder: string = '';
  @Input() type: string = 'text';         // Input type (text, password, email, etc.)
  value: string = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Optional: Implement this if you want your input to support disabling
  setDisabledState?(isDisabled: boolean): void {
    // handle disabling input if needed
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  onBlur() {
    this.onTouched();
  }

}
