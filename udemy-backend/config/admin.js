module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e7ca3e015c3304fb5c8e79b3c7760341'),
  },
});
