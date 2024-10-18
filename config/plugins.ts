module.exports = ({ env }) => ({
  upload: {
    config: {
      jwtSecret: env("JWT_SECRET", "WSBD3ZObnLnhmJp267SolA=="),
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
