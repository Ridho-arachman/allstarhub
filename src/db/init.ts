import mysql from "mysql2/promise";
import "dotenv/config";

async function initDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
  });

  const dbName = process.env.DB_NAME || "allstarhub";

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
  console.log(`✅ Database "${dbName}" is ready!`);
  await connection.end();
}

initDatabase()
  .then(() => console.log("🚀 Running Drizzle migration..."))
  .catch((err) => console.error("❌ Error creating database:", err));
