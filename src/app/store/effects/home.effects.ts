import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { ActionTypes as HomeActions, GetTopHeadlines, GetTopHeadlinesSuccess, GetTopHeadlinesFailure, GetSource, GetSourceSuccess, GetSourceFailure } from '../actions/home.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Constants } from 'src/app/api/constants';
import { ISources } from 'src/app/models/sources.model';
import { IHeadlines } from 'src/app/models/headlines.model';

@Injectable()
export class HomeEffects {
    constructor(private actions: Actions, private userService: UserService) { }
    @Effect()
    topHeadlines = this.actions.pipe(
        ofType(HomeActions.GET_TOP_HEADLINES),
        mergeMap((action: GetTopHeadlines) => this.userService.getTopHeadlines(action.payload).pipe(
            map((response: IHeadlines) => {
                return response.status === Constants.SUCCESS
                    ? new GetTopHeadlinesSuccess(response.articles)
                    : new GetTopHeadlinesFailure('Failed to get headlines');
            }),
            catchError(error => of(new GetTopHeadlinesFailure('Failed to get headlines')))
        ))
    );

    @Effect()
    source = this.actions.pipe(
        ofType(HomeActions.GET_SOURCE),
        mergeMap((action: GetSource) => this.userService.getSources(action.payload).pipe(
            map((response: ISources) => {
                return response.status === Constants.SUCCESS
                    ? new GetSourceSuccess(response.sources)
                    : new GetSourceFailure('Failed to get sources');
            }),
            catchError(error => of(new GetSourceFailure('Failed to get sources')))
        ))
    );
}