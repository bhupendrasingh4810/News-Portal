import { ActionTypes, ActionHeader } from '../actions/header.actions';

export interface HeaderState {
    activeRoute: string;
    searchValue: string;
    countryCode: string;
}

export const initialState: HeaderState = {
    activeRoute: undefined,
    searchValue: undefined,
    countryCode: undefined
}

export function headerReducer(state = initialState, action: ActionHeader): HeaderState {
    switch (action.type) {
        case ActionTypes.SET_ACTIVE_ROUTE:
            return { ...state, activeRoute: action.payload };
        case ActionTypes.SET_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case ActionTypes.SET_COUNTRY_CODE:
            return { ...state, countryCode: action.payload };
        default: return state;
    }
}