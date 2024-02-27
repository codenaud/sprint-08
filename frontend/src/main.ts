/* main.ts */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

if (!navigator.geolocation) {
  alert('Navegador no soporta Geolocation');
  throw new Error('El navegador no soporta Geolocation');
}

// Extiende appConfig con los proveedores adicionales
const extendedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(), // Proveedor para animaciones requerido
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // Proveedores para Toang str
  ],
};

bootstrapApplication(AppComponent, extendedConfig).catch((err) =>
  console.error(err)
);
