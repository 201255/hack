import express from 'express';
import { api } from './config/Config.js';
// import cors from'cors';
import swaggerDocs from './config/swagger.config.js';



const app = express();

app.use(express.json());

// app.use(
//     cors({
//         origin: "http://localhost:8001"
//     })
// )




app.listen(api.port,()=>{
    console.log(`Servidor corriento en el puerto => ${api.port}`);
    swaggerDocs(app, api.port);
});