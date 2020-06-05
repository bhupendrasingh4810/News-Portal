import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import { ActionTypes as CategoryActions, GetCategoryNews, GetCategoryNewsSuccess, GetCategoryNewsFailure } from '../actions/news-category.actions';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { IHeadlines } from 'src/app/models/headlines.model';
import { Constants } from 'src/app/api/constants';

@Injectable()
export class CategoryNewsEffects {
    constructor(private actions: Actions, private userService: UserService) { }
    @Effect()
    newsCategory = this.actions.pipe(
        ofType(CategoryActions.GET_CATEGORY_NEWS),
        mergeMap((action: GetCategoryNews) => this.userService.getTopHeadlines(action.payload).pipe(
            map((response: IHeadlines) => {
                return response.status === Constants.SUCCESS
                    ? new GetCategoryNewsSuccess(response.articles)
                    : new GetCategoryNewsFailure('Failed to get category news');
            }),
            catchError(error => of(new GetCategoryNewsFailure('Failed to get category news')))
        ))
    );
}