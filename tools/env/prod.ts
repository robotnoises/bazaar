import {EnvConfig} from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://bazaarstuff.herokuapp.com/api/v1'
};

export = ProdConfig;

