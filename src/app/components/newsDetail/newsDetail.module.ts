import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { newsDetailRoute } from './newsDetail.routing';
import { NewsDetailComponent } from './newsDetail.component';

@NgModule({
    imports: [RouterModule.forChild(newsDetailRoute)],
    declarations: [
        NewsDetailComponent
    ]
})

export class NewsDetailModule { }