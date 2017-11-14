import Raven from 'raven-js';

const sentry_key = '3c7a27e23d904ba587cf4386745c11ea';
const sentry_app = '244993';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
