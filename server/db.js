import pg from "pg"

export const db = new pg.Pool({
    host:"localhost",
    port:5432,
    database:"suplidb",
    user: "postgres",
    password: "postgres"
})