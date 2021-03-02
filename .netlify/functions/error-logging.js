const Sentry = require("@sentry/node");

Sentry.init({
   dsn: process.env.SENTRY_DSN,
   tracesSampleRate: 1.0,
 });

exports.handler = function(event, context) {
   var transaction = Sentry.captureException(new Error(event.body));
   transaction.finish();

   return {
      statusCode: 201,
      body: ""
   }
}