import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      // Iterate through all form controls and mark them as touched
      Object.keys(this.myForm.controls).forEach(key => {
        const control = this.myForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });

      // Show an alert if the form is invalid
      alert('Please fill out all required fields correctly.');
      return;
    }

    // Form is valid, proceed with form submission
    console.log('Form Submitted', this.myForm.value);

    // Navigate to the sign-in page after successful submission
    this.router.navigate(['/auth/signin']);
  }
}
