import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT ?? 8000;
const SECRET = process.env.JWT_SECRET;

const pgConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    // port: process.env.PG_PORT,
};

export {
    PORT, pgConfig,SECRET
}