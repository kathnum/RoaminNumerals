import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';
import { IRequestSettings } from './from-request';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor() {}
  
postiRequestSettingsForm(irequestrSetting : IRequestSettings): Observable<IRequestSettings>
{ 
  return of(irequestrSetting);
}

}
