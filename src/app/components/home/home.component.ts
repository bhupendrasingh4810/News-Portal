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
    mostPopularNews: IHeadlineArticle[];
    sources: ISource[];
    q: string;
    isLoading: boolean = false;

    constructor(private dataService: DataService,
        private userService: UserService) { }

    ngOnInit() {
        this.dataService.setActiveRoute('');
        this.getTopHeadlines();
        this.getSources();
        this.dataService.getSearchValue.subscribe(response => {
            if (response != undefined) {
                this.q = response;
                this.getTopHeadlines();
            }
        })
    }

    // Function to get top headlines/articles

    getTopHeadlines() {
        this.isLoading = true;
        this.userService.getTopHeadlines({
            q: this.q,
            category: '',
            country: 'in',
            sources: undefined,
            language: undefined,
            page: null,
            pageSize: null
        }).subscribe((response: IHeadlines) => {
            this.isLoading = false;
            if (response.status == Constants.SUCCESS)
                this.mostPopularNews = response.articles;
        }, error => this.isLoading = false);
    }

    // Function to get source

    getSources() {
        this.userService.getSources({
            category: '',
            country: 'in',
            language: undefined,
        }).subscribe((response: ISources) => {
            if (response.status == Constants.SUCCESS)
                this.sources = response.sources;
        }, error => { });
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}