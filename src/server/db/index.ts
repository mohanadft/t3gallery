import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
config({ path: ".env" }); // or .env.local

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql, { schema });
