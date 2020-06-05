import { Component, OnInit } from "@angular/core";
import { IHeadlines, IHeadlineArticle } from 'src/app/models/headlines.model';
import { Constants } from 'src/app/api/constants';
import { ISource, ISources } from 'src/app/models/sources.model';
import { Store, select } from '@ngrx/store';
import { GetTopHeadlines, GetSource } from 'src/app/store/actions/home.actions';
import { StoreHelperService } from 'src/app/services/store-helper.service';
import { SetActiveRoute } from 'src/app/store/actions/header.actions';
import { getSearchValue, getCountryCode } from 'src/app/store/selectors/header.selectors';
import { getHeadlines, getSources } from 'src/app/store/selectors/home.selectors';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    mostPopularNews: IHeadlineArticle[] = [];
    sources: ISource[] = [];
    q: string;
    isLoading: boolean = false;
    topHeadlineParams = {
        q: undefined,
        category: undefined,
        country: undefined,
        sources: undefined,
        language: 'en',
        page: null,
        pageSize: null
    };
    sourceParams = {
        category: undefined,
        country: undefined,
        language: 'en'
    };

    constructor(private store: Store,
        private storeHelper: StoreHelperService) { }

    ngOnInit() {
        this.store.dispatch(new SetActiveRoute(''));
        this.getTopHeadlines();
        this.getSources();
        this.store.pipe(select(getHeadlines)).subscribe(headlines => this.mostPopularNews = headlines);
        this.store.pipe(select(getSources)).subscribe(sources => this.sources = sources);
        this.store.pipe(select(getSearchValue)).subscribe(searchValue => {
            if (searchValue) {
                this.topHeadlineParams.q = searchValue;
                this.getTopHeadlines();
            }
        });
        this.store.pipe(select(getCountryCode)).subscribe(response => {
            if (response != undefined) {
                this.topHeadlineParams.country = response;
                this.sourceParams.country = response;
                this.getTopHeadlines();
                this.getSources();
            }
        });
    }

    // Function to get top headlines/articles

    getTopHeadlines() {
        this.isLoading = true;
        this.storeHelper.waitForEffectSuccess(new GetTopHeadlines(this.topHeadlineParams))
            .subscribe((response: IHeadlines) =>
                this.isLoading = false,
                error => this.isLoading = false);
    }

    // Function to get source

    getSources() {
        this.storeHelper.waitForEffectSuccess(new GetSource(this.sourceParams))
            .subscribe((response: ISources) => {}, error => { });
    }

    ngOnDestroy() {
        this.store.dispatch(new SetActiveRoute(undefined));
    }
}