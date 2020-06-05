import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { newsCategoryRoute } from './news-category.routing';
import { NewsCategoryComponent } from './news-category.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(newsCategoryRoute)
    ],
    declarations: [
        NewsCategoryComponent
    ]
})

export class NewsCategoryModule { }