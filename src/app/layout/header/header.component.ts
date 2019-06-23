import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Constants } from 'src/app/api/constants';
import { ICountry } from 'src/app/models/country.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    categories: Array<string> = Constants.CATEGORIES;
    countries: ICountry[] = Constants.COUNTRY;
    active: string;
    searchValue: string;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getActiveRoute.subscribe(data => this.active = data);
    }

    search() {
        this.dataService.setSearchValue(this.searchValue);
    }

    selectCountry(event: any) {
        this.dataService.setCountryCode(event.target.value);
    }
}