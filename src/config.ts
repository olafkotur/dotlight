require('dotenv').config();

type Environment = 'production' | 'development' | 'local';

interface IConfig {
  env: string;
  uri: string;
  port: string;
  enableScheduler: boolean;
  twitter: {
    bearer: string;
  };
}

const env: Environment = process.env.NODE_ENV === 'production' ? 'production' : 'local';

export const config: IConfig = {
  env,
  uri: env === 'production' ? process.env.MONGO_URI || '' : 'mongodb://localhost:27017/',
  port: process.env.PORT || '8080',
  enableScheduler: process.env.ENABLE_SCHEDULER === 'true',
  twitter: {
    bearer: process.env.TWITTER_BEARER_TOKEN || '',
  },
};
