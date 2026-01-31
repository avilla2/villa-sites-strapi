module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            process.env.CDN_URI,
            `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            process.env.CDN_URI,
            `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`
          ],
          "frame-src": ["'self'"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::cors',
];
