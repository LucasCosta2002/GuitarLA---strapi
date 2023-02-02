module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfbrii02i3mjdunq5u3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_render'),
      user: env('DATABASE_USERNAME', 'lucas'),
      password: env('DATABASE_PASSWORD', 'PM2hU28HME6mhAuHkSx77h39LuxGcmoC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
