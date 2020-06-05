import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/api/constants';
import { ICountry } from 'src/app/models/country.model';
import { SetSearchValue, SetCountryCode } from 'src/app/store/actions/header.actions';
import { Store, select } from '@ngrx/store';
import { getActiveRoute } from 'src/app/store/selectors/header.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    categories: Array<string> = Constants.CATEGORIES;
    countries: ICountry[] = Constants.COUNTRY;
    active: string;
    searchValue: string;
    constructor(private store: Store) { }

    ngOnInit() {
        this.store.pipe(select(getActiveRoute)).subscribe(route => this.active = route);
    }

    search() {
        this.store.dispatch(new SetSearchValue(this.searchValue));
    }

    selectCountry(event: any) {
        this.store.dispatch(new SetCountryCode(event.target.value));
    }
}