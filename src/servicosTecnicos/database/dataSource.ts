import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from '../../dominio/entidades/Usuario';
import { Documento } from '../../dominio/entidades/Documento';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'patinhas',
  password: process.env.DB_PASSWORD || 'patinhas2890*',
  database: process.env.DB_DATABASE || 'patinhasderua',
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: [Usuario, Documento],
  migrations: ['src/servicosTecnicos/database/migrations/*.ts'],
  subscribers: [],
});