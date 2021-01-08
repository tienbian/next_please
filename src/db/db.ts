import {createConnection} from 'typeorm';
export const connect = async () => {
  await createConnection({
    'type': 'postgres',
    'database': process.env.TYPEORM_DATABASE,
    'host': process.env.TYPEORM_HOST,
    'port': 5432,
    'username': process.env.TYPEORM_USERNAME,
    'password': process.env.TYPEORM_PASSWORD,
    'synchronize': false,
    'logging': true,
    'entities': [
      __dirname + '/models/*{.ts,.js}',
    ],
    'migrations': [
      __dirname + '/migrations/*.js',
    ],
    'cli': {
      entitiesDir: __dirname + '/models/',
      migrationsDir: __dirname + '/migrations/',
    },
  });
};
