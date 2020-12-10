import { Injectable } from '@angular/core';

export type Errors = {
  [key: string]: string;
};

const ErrorMessages: Errors = {
  required: 'Required field.',
  email: 'Email is invalid.'
};

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  constructor() { }

  getMessage(errorObject: any): string {
    const [key] = Object.keys(errorObject);
    return ErrorMessages[key];
  }
}
