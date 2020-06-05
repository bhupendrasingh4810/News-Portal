import { Action } from '@ngrx/store';

export enum ActionTypes {
    SET_ACTIVE_ROUTE = '[HEADER] Set Active Route',
    SET_SEARCH_VALUE = '[HEADER] Set Search Value',
    SET_COUNTRY_CODE = '[HEADER] Set Active Route'
}

export class SetActiveRoute implements Action {
    type = ActionTypes.SET_ACTIVE_ROUTE;
    constructor(public payload: any) { }
}

export class SetSearchValue implements Action {
    type = ActionTypes.SET_SEARCH_VALUE;
    constructor(public payload: any) { }
}

export class SetCountryCode implements Action {
    type = ActionTypes.SET_COUNTRY_CODE;
    constructor(public payload: any) { }
}

export type ActionHeader =
    | SetActiveRoute
    | SetSearchValue
    | SetCountryCode;