import { include } from '@material-appkit/core/util/path';

export default {
  index: '/',

  gettingStarted: include('getting-started/', {
    index: '',
  }),

  api: include('api/', {
    index: '',
  }),

  error: include('/', {
    critical: '500',
    nonCritical: '404',
  }),
};
