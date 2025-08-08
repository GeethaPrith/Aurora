import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // All your sections load here
    { path: '**', redirectTo: '' }

];
