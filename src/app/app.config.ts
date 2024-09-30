import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { tokenInterceptor } from './services/intercepter/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useFactory: tokenInterceptor,
    //   multi: true,
    // },
  ],
};
