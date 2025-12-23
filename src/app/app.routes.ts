import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AllProjects } from './pages/all-projects/all-projects';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'projects',
    component: AllProjects
  }
];
