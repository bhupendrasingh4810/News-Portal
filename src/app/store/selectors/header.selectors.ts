import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeader from '../reducers/header.reducer';

export const getHeaderState = createFeatureSelector<fromHeader.HeaderState>('header');


export const getActiveRoute = createSelector(
    getHeaderState,
    ({ activeRoute }) => activeRoute);


export const getSearchValue = createSelector(
    getHeaderState,
    ({ searchValue }) => searchValue);


export const getCountryCode = createSelector(
    getHeaderState,
    ({ countryCode }) => countryCode);