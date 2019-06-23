import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { layoutRoute } from './layout.routing';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(layoutRoute)
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent
    ]
})

export class LayoutModule { }