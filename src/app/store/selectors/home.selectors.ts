import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

export const getHomeState = createFeatureSelector<fromHome.HomeState>('home');

export const getHeadlines = createSelector(
    getHomeState,
    ({ topHeadlines }) => topHeadlines);

export const getSources = createSelector(
    getHomeState,
    ({ sources }) => sources);