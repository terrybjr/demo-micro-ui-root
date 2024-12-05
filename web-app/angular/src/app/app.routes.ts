import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'application1',
    loadComponent: () =>
      loadRemoteModule('app1', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'application2',
    loadComponent: () =>
      loadRemoteModule('app2', './Component').then((m) => m.AppComponent),
  }
];
