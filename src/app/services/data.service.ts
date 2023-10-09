import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _formData = new BehaviorSubject<any>(null);
  formData$ = this._formData.asObservable();

  constructor() { }

  setFormData(data: any) {
    this._formData.next(data);
  }
}
