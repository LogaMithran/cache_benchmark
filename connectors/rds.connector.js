import * as mysql from "mysql2";

const pool = mysql.createPool({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool.promise();
