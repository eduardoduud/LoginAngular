import { Route, Routes } from '@angular/router';
import { LoginComponent } from "./ui/external/login/login.component";
import {RoutePaths} from "./route-paths";
import {HomeComponent} from "./ui/external/home/home.component";


export interface AppRoute extends Route {
  path?: RoutePaths;
  children?: Array<AppRoute>;
}

export const routes: Routes = [
  {
    path: RoutePaths.Default,
    component: HomeComponent
  },
  {
    path: RoutePaths.Login,
    component: LoginComponent
  }
];

export function getBaseUrl(): string {
  return document.getElementsByTagName('base')[0].href;
}
