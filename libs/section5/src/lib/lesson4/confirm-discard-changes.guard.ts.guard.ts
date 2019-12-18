import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { WizardFormComponent } from '../lesson2/wizard-form/wizard-form.component';
import { WizardComponent } from '../wizard/wizard.component';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDiscardChangesGuard
  implements CanDeactivate<WizardComponent> {
  canDeactivate(component: WizardComponent): Observable<boolean> {
    return component.canDeactivate();
  }
}
