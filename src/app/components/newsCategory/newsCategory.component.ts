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
    articles: IHeadlineArticle[];
    isLoading: boolean = false;
    category: string;
    isEmpty: boolean = false;
    constructor(private dataService: DataService,
        private activatedRoute: ActivatedRoute,
        private userService: UserService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(({ id }) => {
            this.category = id;
            this.dataService.setActiveRoute(id);
            this.getNewsByCategory(undefined, id);
        });
        this.dataService.getSearchValue
            .subscribe(response => {
                if (response != undefined) this.getNewsByCategory(response, this.category)
            });
    }

    // Function to get headlines/articles by category

    getNewsByCategory(q, category) {
        this.isLoading = true;
        this.userService.getTopHeadlines({
            q,
            category,
            country: 'in',
            sources: undefined,
            language: undefined,
            page: null,
            pageSize: null
        }).subscribe(({ status, articles, totalResults }: IHeadlines) => {
            this.isLoading = false;
            if (status == Constants.SUCCESS) {
                this.articles = articles;
                this.isEmpty = totalResults == 0;
            }
        }, error => this.isLoading = false);
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}