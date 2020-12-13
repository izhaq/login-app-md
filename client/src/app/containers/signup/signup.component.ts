import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorMessageService} from '../../services/error-message.service';
import {UserFacadeService} from '../../facades/user.facade.service';
import {User} from '../../store/user/interfaces';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;
  isSubmitted = false;
  emailExist = { exist: false, error: '' };
  constructor(
    private fb: FormBuilder,
    private errorMsg: ErrorMessageService,
    private userFacade: UserFacadeService
  ) { }

  ngOnInit(): void {
    this.signup = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.userFacade.getSignupResults()
      .subscribe( exist => this.emailExist = exist);
  }

  onSubmit({ value: user, valid }: { value: User, valid: boolean }): void {
    this.isSubmitted = true;
    if (!valid) {
      return;
    }
    this.userFacade.saveUserProfile(user);
  }

  showError(fieldName: string): boolean | undefined {
    return (this.isSubmitted && this.signup.get(fieldName)?.invalid) || this.signup.get(fieldName)?.touched;
  }

  getValidationMessage(fieldName: string): string {
    return this.signup.get(fieldName)?.errors ? this.errorMsg.getMessage(this.signup.get(fieldName)?.errors) : '';
  }

}

//this.router.navigate(['/'])
