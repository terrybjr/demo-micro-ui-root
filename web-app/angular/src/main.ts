import { initFederation } from '@angular-architects/native-federation';

import { environment } from './environments/environment';

initFederation(environment.manifestFile)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
