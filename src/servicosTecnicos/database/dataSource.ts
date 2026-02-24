import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Usuario } from '../../dominio/entidades/Usuario';
import { Documento } from '../../dominio/entidades/Documento';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL, // 👈 ESSENCIAL
  ssl: {
    rejectUnauthorized: false, // 👈 obrigatório no Supabase
  },
  synchronize: false, // ❌ NUNCA em produção
  logging: false,
  entities: [Usuario, Documento],
});