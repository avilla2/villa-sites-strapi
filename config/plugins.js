module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      //  provider: 'sendgrid',
      //  providerOptions: {
      //    apiKey: process.env.SENDGRID_API_KEY
      //  },
      provider: 'amazon-ses',
      providerOptions: {
        key: process.env.AWS_SES_KEY,
        secret: process.env.AWS_SES_SECRET,
        amazon: `https://email.${(process.env.AWS_SES_REGION, 'us-west-2')}.amazonaws.com`, // https://docs.aws.amazon.com/general/latest/gr/ses.html
      },
       settings: {
         defaultFrom: 'notifications@villawebsolutions.com',
         defaultReplyTo: 'alex@villawebsolutions.com',
       }
     }
   }
  // ...
})
