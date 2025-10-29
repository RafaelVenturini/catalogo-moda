import { createPool } from 'mysql2/promise';

export const pool = createPool({
	host: 'localhost',
	user: 'root',
	password: 'Mix210307*',
	database: 'liss_moda',
	port: 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});
