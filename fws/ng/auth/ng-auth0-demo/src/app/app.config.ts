import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'http://dev-4bstbjrtw5oxthwt.us.auth0.com',
      clientId: 'P2Fvxe26zQDbtidZSH2JQiZDwo982YVv',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ]
};
