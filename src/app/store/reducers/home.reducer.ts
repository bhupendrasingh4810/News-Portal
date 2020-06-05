import { ActionTypes, ActionHome } from '../actions/home.actions';
import { IHeadlineArticle } from 'src/app/models/headlines.model';
import { ISource } from 'src/app/models/sources.model';

export interface HomeState {
    topHeadlines: IHeadlineArticle[];
    sources: ISource[];
}

export const initialState: HomeState = {
    topHeadlines: [],
    sources: []
}

export function homeReducer(state = initialState, action: ActionHome): HomeState {
    switch (action.type) {
        case ActionTypes.GET_TOP_HEADLINES_SUCCESS:
            return { ...state, topHeadlines: action.payload };
        case ActionTypes.GET_SOURCE_SUCCESS:
            return { ...state, sources: action.payload };
        default: return state;
    }
}