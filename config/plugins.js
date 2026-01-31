module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
        key: process.env.AWS_SES_KEY,
        secret: process.env.AWS_SES_SECRET,
        amazon: `https://email.${(process.env.AWS_SES_REGION, 'us-west-2')}.amazonaws.com`,
      },
       settings: {
         defaultFrom: 'notifications@villawebsolutions.com',
         defaultReplyTo: 'alex@villawebsolutions.com',
       }
     }
   },
    upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: `https://${env("CDN_URI")}`,
        rootPath: env("CDN_ROOT_PATH"),
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            ACL: "private",
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
})
