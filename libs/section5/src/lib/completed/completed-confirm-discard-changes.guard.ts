import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { CompletedWizardComponent } from './completed-wizard/completed-wizard.component';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompletedConfirmDiscardChangesGuard
  implements CanDeactivate<CompletedWizardComponent> {
  canDeactivate(
    component: CompletedWizardComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    return component.canDeactivate().pipe(take(1));
  }
}
