import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export const db = knex({
    client: "pg",
    connection: {
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD
    }
});
