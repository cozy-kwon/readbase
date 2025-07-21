import { worker } from './browser';

if (typeof window !== 'undefined') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
}
