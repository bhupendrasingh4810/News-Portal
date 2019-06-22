import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const layoutRoute: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'category/:id',
                loadChildren: () => import('../components/newsCategory/newsCategory.module').then(m => m.NewsCategoryModule)
            },
            {
                path: '/:id',
                loadChildren: () => import('../components/newsDetail/newsDetail.module').then(m => m.NewsDetailModule)
            }
        ]
    }
];