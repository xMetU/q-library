import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from '~/app.config';
import { RootComponent } from '~/core/components/root/root.component';

bootstrapApplication(RootComponent, appConfig).catch((err) => console.error(err));
