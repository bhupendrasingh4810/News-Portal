import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    active: string;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getActiveRoute.subscribe(data => this.active = data);
    }

    search(event) { }
}