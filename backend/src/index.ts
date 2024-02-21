import Server from './models/server';
import dotenv from 'dotenv';

// configuramos las varibales de ambiente
dotenv.config();
const server = new Server();
