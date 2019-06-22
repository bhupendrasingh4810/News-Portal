import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.setActiveRoute('');
    }

    ngOnDestroy() {
        this.dataService.setActiveRoute(undefined);
    }
}