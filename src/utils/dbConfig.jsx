import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_w0IrSQzTL8Cc@ep-morning-snow-a8cqwnvk-pooler.eastus2.azure.neon.tech/LifeSync?sslmode=require"
);
export const db = drizzle(sql, { schema });


