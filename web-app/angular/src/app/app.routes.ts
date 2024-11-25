import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
export const routes: Routes = [
  {
    path: 'app1',
    loadComponent: () =>
      loadRemoteModule('app1', './Component').then((m) => m.AppComponent),
  }
];
