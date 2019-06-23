import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor() { }

    private activeRoute = new BehaviorSubject(undefined);
    getActiveRoute = this.activeRoute.asObservable();

    private search = new BehaviorSubject(undefined);
    getSearchValue = this.search.asObservable();

    private country = new BehaviorSubject(undefined);
    getCountryCode = this.country.asObservable();

    setActiveRoute(args: string) {
        this.activeRoute.next(args);
    }

    setSearchValue(args: string) {
        this.search.next(args);
    }

    setCountryCode(args: string) {
        this.country.next(args);
    }
}