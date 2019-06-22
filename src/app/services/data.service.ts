import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor() { }

    private activeRoute = new BehaviorSubject(undefined);
    getActiveRoute = this.activeRoute.asObservable();

    setActiveRoute(args: string) {
        this.activeRoute.next(args);
    }
}