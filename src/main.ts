import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/Component/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
