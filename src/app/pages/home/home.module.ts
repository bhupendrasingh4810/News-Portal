import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { homeRoute } from './home.routing';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRoute)
    ],
    declarations: [
        HomeComponent
    ]
})

export class HomeModule { }