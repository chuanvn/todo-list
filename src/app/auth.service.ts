import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: Boolean = false;
  logger: Subject<boolean>;
  constructor() {}

}
