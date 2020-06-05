import { Component, OnInit } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { IHeadlines, IHeadlineArticle } from 'src/app/models/headlines.model';
import { Constants } from 'src/app/api/constants';
import { StoreHelperService } from 'src/app/services/store-helper.service';
import { SetActiveRoute } from 'src/app/store/actions/header.actions';
import { getSearchValue, getCountryCode } from 'src/app/store/selectors/header.selectors';
import { getArticles } from 'src/app/store/selectors/news-category.selector';
import { GetCategoryNews } from 'src/app/store/actions/news-category.actions';

@Component({
    selector: 'app-news-category',
    templateUrl: './news-category.component.html'
})

export class NewsCategoryComponent implements OnInit {
    articles: IHeadlineArticle[] = [];
    isLoading: boolean = false;
    isEmpty: boolean = false;
    noMoreResults: boolean = false;
    topHeadlineParams = {
        q: undefined,
        category: undefined,
        country: undefined,
        sources: undefined,
        language: 'en',
        page: 0,
        pageSize: null
    };
    constructor(private store: Store,
        private storeHelper: StoreHelperService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(({ id }) => {
            this.topHeadlineParams = {...this.topHeadlineParams, category: id };
            this.store.dispatch(new SetActiveRoute(id));
            this.articles = [];
            this.getNewsByCategory();
        });
        this.store.pipe(select(getSearchValue))
            .subscribe(response => {
                if (response != undefined) {
                    this.topHeadlineParams.q = response;
                    this.topHeadlineParams.page = 0;
                    this.articles = [];
                    this.getNewsByCategory();
                }
            });
        this.store.pipe(select(getCountryCode))
            .subscribe(response => {
                if (response != undefined) {
                    this.topHeadlineParams.country = response;
                    this.topHeadlineParams.page = 0;
                    this.articles = [];
                    this.getNewsByCategory();
                }
            });
        this.store.pipe(select(getArticles)).subscribe(articles => this.articles = [...this.articles, ...articles]);
    }

    // Function to get headlines/articles by category

    getNewsByCategory() {
        this.topHeadlineParams.page++;
        this.isLoading = true;
        this.storeHelper.waitForEffectSuccess(new GetCategoryNews(this.topHeadlineParams))
            .subscribe(({ status, articles, totalResults }: IHeadlines) => {
                this.isLoading = false;
                if (status == Constants.SUCCESS) {
                    this.noMoreResults = articles.length > 0 ? false : true;
                    this.isEmpty = totalResults == 0;
                }
            }, error => this.isLoading = false);
    }

    ngOnDestroy() {
        this.store.dispatch(new SetActiveRoute(undefined));
    }
}