import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_TOP_HEADLINES = '[Home] Get Top Headlines',
    GET_TOP_HEADLINES_SUCCESS = '[Home] Get Top Headlines Success',
    GET_TOP_HEADLINES_FAILURE = '[Home] Get Top Headlines Failure',

    GET_SOURCE = '[Home] Get Source',
    GET_SOURCE_SUCCESS = '[Home] Get Source Success',
    GET_SOURCE_FAILURE = '[Home] Get Source Failure'
}

export class GetTopHeadlines implements Action {
    type = ActionTypes.GET_TOP_HEADLINES;
    constructor(public payload: any) { }
}

export class GetTopHeadlinesSuccess implements Action {
    type = ActionTypes.GET_TOP_HEADLINES_SUCCESS;
    constructor(public payload: any) { }
}

export class GetTopHeadlinesFailure implements Action {
    type = ActionTypes.GET_TOP_HEADLINES_FAILURE;
    constructor(public payload: any) { }
}

export class GetSource implements Action {
    type = ActionTypes.GET_SOURCE;
    constructor(public payload: any) { }
}

export class GetSourceSuccess implements Action {
    type = ActionTypes.GET_SOURCE_SUCCESS;
    constructor(public payload: any) { }
}

export class GetSourceFailure implements Action {
    type = ActionTypes.GET_SOURCE_FAILURE;
    constructor(public payload: any) { }
}

export type ActionHome =
    | GetTopHeadlines
    | GetTopHeadlinesSuccess
    | GetTopHeadlinesFailure
    | GetSource
    | GetSourceSuccess
    | GetSourceFailure;