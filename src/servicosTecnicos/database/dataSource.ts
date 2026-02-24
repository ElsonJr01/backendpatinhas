import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from '../../dominio/entidades/Usuario';
import { Documento } from '../../dominio/entidades/Documento';

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL não definida');
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,

  // 🔐 Obrigatório para Supabase
  ssl: {
    rejectUnauthorized: false,
  },

  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',

  entities: [Usuario, Documento],
  migrations: ['dist/servicosTecnicos/database/migrations/*.js'],
  subscribers: [],
});