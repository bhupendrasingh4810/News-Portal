import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { homeRoute } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [RouterModule.forChild(homeRoute)],
    declarations: [HomeComponent]
})

export class HomeModule { }