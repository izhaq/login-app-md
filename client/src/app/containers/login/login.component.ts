import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import {ErrorMessageService} from '../../services/error-message.service';
import {LoginFacadeService} from '../../facades/login.facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private errorMsg: ErrorMessageService,
    private loginFacade: LoginFacadeService
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit({ value: { email, password  }, valid }: { value: { email: string, password: string  }, valid: boolean }): void {
    this.isSubmitted = true;
    if (!valid) {
      return;
    }
    this.loginFacade.login(email, password);
  }

  showError(fieldName: string): boolean | undefined {
    return (this.isSubmitted && this.login.get(fieldName)?.invalid) || this.login.get(fieldName)?.touched;
  }

  getValidationMessage(fieldName: string): string {
    return this.login.get(fieldName)?.errors ? this.errorMsg.getMessage(this.login.get(fieldName)?.errors) : '';
  }

}
