import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from '../reducers/news-category.reducer';

export const getCategoryState = createFeatureSelector<fromCategory.CategoryState>('category');

export const getArticles = createSelector(
    getCategoryState,
    ({ articles }) => articles);