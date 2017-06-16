import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);