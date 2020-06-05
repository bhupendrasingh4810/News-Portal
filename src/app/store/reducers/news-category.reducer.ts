import { ActionCategory, ActionTypes } from '../actions/news-category.actions';
import { IHeadlineArticle } from 'src/app/models/headlines.model';

export interface CategoryState {
    articles: IHeadlineArticle[];
}

export const initialState: CategoryState = {
    articles: []
}

export function categoryNewsReducer(state = initialState, action: ActionCategory): CategoryState {
    switch (action.type) {
        case ActionTypes.GET_CATEGORY_NEWS_SUCCESS:
            return { ...state, articles: action.payload };
        default: return state;
    }
}