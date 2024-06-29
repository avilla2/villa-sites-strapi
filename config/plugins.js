module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY
      },
      settings: {
         defaultFrom: 'notifications@villawebsolutions.com',
         defaultReplyTo: 'villalexandro@gmail.com',
      }
    }
  },
})
