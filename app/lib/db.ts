import postgres from "postgres";

declare global {
  var __PG_CLIENT: ReturnType<typeof postgres> | undefined;
}

const sql =
  global.__PG_CLIENT ?? postgres(process.env.POSTGRES_URL!, { ssl: "require" });

if (process.env.NODE_ENV === "development") {
  global.__PG_CLIENT = sql;
}

export default sql;
