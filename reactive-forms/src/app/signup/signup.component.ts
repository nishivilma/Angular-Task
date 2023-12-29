import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MustMatch } from 'src/app/helpers/must-match.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  submitted = false;
  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.signupForm = this.formbuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        number: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        date: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,

            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);

    if (this.signupForm.invalid) {
      return;
    } else {
      let formValues: any = this.signupForm.value;
      this.router.navigate(['/details'], {
        queryParams: { formValues: JSON.stringify(formValues) },
      });
    }
  }
}
