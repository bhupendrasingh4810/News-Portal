import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const layoutRoute: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'category/:id',
                loadChildren: () => import('../pages/news-category/news-category.module').then(m => m.NewsCategoryModule)
            }
        ]
    }
];