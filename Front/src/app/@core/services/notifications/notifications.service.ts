import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  showSuccessToast(message: string) {
    console.log(message);
  }

  showWarningToast(message: string) {
    console.log(message);
  }
}
