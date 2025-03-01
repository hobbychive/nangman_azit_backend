import "dotenv/config";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  allowPublicKeyRetrieval: true,
});

pool.on("error", (err) => {
  console.error("Database pool error:", err);
});

export default pool.promise();
