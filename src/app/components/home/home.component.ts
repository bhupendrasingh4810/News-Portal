import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { IHeadlines, IHeadlineArticle } from 'src/app/models/headlines.model';
import { Constants } from 'src/app/api/constants';
import { ISource, ISources } from 'src/app/models/sources.model';

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

    constructor(private dataService: DataService,
        private userService: UserService) { }

    ngOnInit() {
        this.dataService.setActiveRoute('');
        this.getTopHeadlines();
        this.getSources();
        this.dataService.getSearchValue.subscribe(response => {
            if (response != undefined) {
                this.topHeadlineParams.q = response;
                this.getTopHeadlines();
            }
        });
        this.dataService.getCountryCode.subscribe(response => {
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
        this.userService.getTopHeadlines(this.topHeadlineParams).subscribe((response: IHeadlines) => {
            this.isLoading = false;
            if (response.status == Constants.SUCCESS)
                this.mostPopularNews = response.articles;
        }, error => this.isLoading = false);
    }

    // Function to get source

    getSources() {
        this.userService.getSources(this.sourceParams).subscribe((response: ISources) => {
            if (response.status == Constants.SUCCESS)
                this.sources = response.sources;
        }, error => { });
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}