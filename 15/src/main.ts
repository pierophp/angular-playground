import { ɵresetCompiledComponents } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// https://stackoverflow.com/questions/65025741/running-ng-server-with-hmr-still-causes-page-to-reload-on-changes
declare let module: any;
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => ɵresetCompiledComponents());
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
