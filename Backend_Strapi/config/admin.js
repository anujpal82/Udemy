module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '11c087cd022c63e0fa52676d59628f29'),
  },
});
