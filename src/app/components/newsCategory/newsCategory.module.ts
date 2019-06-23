import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { newsCategoryRoute } from './newsCategory.routing';
import { NewsCategoryComponent } from './newsCategory.component';
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