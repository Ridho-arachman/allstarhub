import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL in .env file");
}

export const db = drizzle(process.env.DATABASE_URL);
