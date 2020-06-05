import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { headerReducer, HeaderState, initialState as headerInitialState } from './header.reducer';
import { homeReducer, HomeState, initialState as homeInitialState } from './home.reducer';
import { categoryNewsReducer, CategoryState, initialState as categoryInitialState } from './news-category.reducer';

export interface State {
    header: HeaderState;
    home: HomeState;
    category: CategoryState;
}

export const initialState: State = {
    header: headerInitialState,
    home: homeInitialState,
    category: categoryInitialState
};

export const reducers: ActionReducerMap<State> = {
    header: headerReducer,
    home: homeReducer,
    category: categoryNewsReducer
};

export const metaReducers: MetaReducer<State>[] = [];
