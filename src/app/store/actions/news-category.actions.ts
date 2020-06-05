import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_CATEGORY_NEWS = '[Home] Get Category News',
    GET_CATEGORY_NEWS_SUCCESS = '[Home] Get Category News Success',
    GET_CATEGORY_NEWS_FAILURE = '[Home] Get Category News Failure'
}

export class GetCategoryNews implements Action {
    type = ActionTypes.GET_CATEGORY_NEWS;
    constructor(public payload: any) { }
}

export class GetCategoryNewsSuccess implements Action {
    type = ActionTypes.GET_CATEGORY_NEWS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetCategoryNewsFailure implements Action {
    type = ActionTypes.GET_CATEGORY_NEWS_FAILURE;
    constructor(public payload: any) { }
}

export type ActionCategory =
    | GetCategoryNews
    | GetCategoryNewsSuccess
    | GetCategoryNewsFailure;