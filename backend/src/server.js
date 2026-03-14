import express from 'express';
import dns from 'dns';
import account_router from './routes/accounts_routers.js';
import movie_router from './routes/moives_routers.js';
import show_router from './routes/shows_routers.js'
import cinema_hall_router from "./routes/cinema_halls_routers.js";
import { connect_db } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT= process.env.PORT ?? 5001;

const app = express();

dns.setServers(['8.8.8.8', '8.8.4.4']);

app.use(express.json());

app.use("/api/accounts",account_router);

app.use("/api/movies",movie_router);

app.use("/api/shows",show_router);

app.use("/api/cinema_hall",cinema_hall_router);


connect_db().then(() => {
    app.listen(PORT,()=>{
        console.log(`server bat dau chay tren cong ${PORT}`);
    });    
});

