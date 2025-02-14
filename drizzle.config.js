export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_w0IrSQzTL8Cc@ep-morning-snow-a8cqwnvk-pooler.eastus2.azure.neon.tech/LifeSync?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_w0IrSQzTL8Cc@ep-morning-snow-a8cqwnvk-pooler.eastus2.azure.neon.tech/LifeSync?sslmode=require",
  },
};