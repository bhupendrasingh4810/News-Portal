import { Injectable } from '@angular/core';
import { State } from '../store/reducers';
import { Action, ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StoreHelperService {
	constructor(private store: Store<State>, private actionsSubject: ActionsSubject) { }

	waitForEffectSuccess(inputAction: Action): Observable<any> {
		const success = inputAction.type + ' Success';
		const failure = inputAction.type + ' Failure';
		this.store.dispatch(inputAction);
		return this.actionsSubject.pipe(
			filter(a => a.type === success || a.type === failure),
			first(),
			switchMap(a => new Observable((observer) => {
				if (a.type === success)
					observer.next((<any>a).payload);
				else
					observer.error((<any>a).payload);
				observer.complete();
			}))
		);
	}
}
