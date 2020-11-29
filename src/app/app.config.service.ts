import { InjectionToken } from "@angular/core";
import { AppConfig } from './app.config';
import { environment } from '../environments/environment';

export const AppService = new InjectionToken<AppConfig>('App Config');

export const AppValue: AppConfig = {
  apiEndPoint: environment.apiEndPoint
}
