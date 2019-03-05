import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { WorkDetailComponent } from './components/work-detail.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
//import { FormContactComponent } from './components/form-contact.component';
import { BlogComponent } from './components/blog.component';
import { BlogDetailComponent } from './components/blog-detail.component';
//import { FormReplyComponent } from './components/form-reply.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'works', pathMatch: 'full' }, //<-- Cambiado para que redirija a /works
    {path: 'works', component: HomeComponent },
    {path: 'works/:short-name', component: WorkDetailComponent },
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/:short-name', component: BlogDetailComponent },
    {path: 'contact', component: ContactComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);