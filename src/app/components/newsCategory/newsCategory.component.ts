import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IHeadlines, IHeadlineArticle } from 'src/app/models/headlines.model';
import { Constants } from 'src/app/api/constants';

@Component({
    selector: 'app-news-category',
    templateUrl: './newsCategory.component.html'
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
    constructor(private dataService: DataService,
        private activatedRoute: ActivatedRoute,
        private userService: UserService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(({ id }) => {
            this.topHeadlineParams.category = id;
            this.dataService.setActiveRoute(id);
            this.articles = [];
            this.getNewsByCategory();
        });
        this.dataService.getSearchValue
            .subscribe(response => {
                if (response != undefined) {
                    this.topHeadlineParams.q = response;
                    this.topHeadlineParams.page = 0;
                    this.articles = [];
                    this.getNewsByCategory();
                }
            });
        this.dataService.getCountryCode
            .subscribe(response => {
                if (response != undefined) {
                    this.topHeadlineParams.country = response;
                    this.topHeadlineParams.page = 0;
                    this.articles = [];
                    this.getNewsByCategory();
                }
            });
    }

    // Function to get headlines/articles by category

    getNewsByCategory() {
        this.topHeadlineParams.page++;
        this.isLoading = true;
        this.userService.getTopHeadlines(this.topHeadlineParams).subscribe(({ status, articles, totalResults }: IHeadlines) => {
            this.isLoading = false;
            if (status == Constants.SUCCESS) {
                this.articles = [...this.articles, ...articles];
                this.noMoreResults = articles.length > 0 ? false : true;
                this.isEmpty = totalResults == 0;
            }
        }, error => this.isLoading = false);
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}