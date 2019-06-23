import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { INews, IArticle } from 'src/app/models/news.model';
import { Constants } from 'src/app/api/constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    mostPopularNews: IArticle[];
    constructor(private dataService: DataService,
        private userService: UserService) { }

    ngOnInit() {
        this.dataService.setActiveRoute('');
        this.getTopHeadlines();
    }

    getTopHeadlines() {
        this.userService.getTopHeadlines({
            q: '',
            category: '',
            country: 'in',
            sources: undefined,
            language: undefined,
            page: null,
            pageSize: null
        }).subscribe((response: INews) => {
            if (response.status == Constants.SUCCESS)
                this.mostPopularNews = response.articles;
        }, error => { });
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}