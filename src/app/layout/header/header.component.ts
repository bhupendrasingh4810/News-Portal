import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Constants } from 'src/app/api/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    categories: Array<string> = Constants.CATEGORIES;
    active: string;
    searchValue: string;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getActiveRoute.subscribe(data => this.active = data);
    }

    search() {
        this.dataService.setSearchValue(this.searchValue);
    }
}