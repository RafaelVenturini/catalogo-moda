import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

export const pool = createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: 3307,
	waitForConnections: true,
	connectionLimit: 12,
	queueLimit: 25,
	idleTimeout: 300000,
	maxIdle: 3,
	enableKeepAlive: true
});
