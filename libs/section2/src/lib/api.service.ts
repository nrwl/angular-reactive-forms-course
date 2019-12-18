import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import * as deepEqual from 'deep-equal';

const USERS = [
  { first: 'Jeff', middle: 'Brian', last: 'Cross' },
  { first: 'Jeff', middle: '', last: 'Cross' },
  { first: 'Zack', middle: 'Danger', last: 'Rose' }
];

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public alreadyExists$ = (name: {
    first: string;
    middle: string;
    last: string;
  }) =>
    of(USERS).pipe(
      map(users => users.some(x => deepEqual(x, name))),
      delay(2000)
    );
}
