import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { WorkDetailComponent } from './components/work-detail.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'works', pathMatch: 'full' }, //<-- Cambiado para que redirija a /home
    {path: 'works', component: HomeComponent },
    {path: 'works/:short-name', component: WorkDetailComponent },
    {path: 'about', component: AboutComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);