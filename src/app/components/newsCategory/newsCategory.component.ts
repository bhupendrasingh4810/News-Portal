import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-news-category',
    templateUrl: './newsCategory.component.html'
})

export class NewsCategoryComponent implements OnInit {
    category: string;
    constructor(private dataService: DataService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(({ id }) =>
            this.dataService.setActiveRoute(id));
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}