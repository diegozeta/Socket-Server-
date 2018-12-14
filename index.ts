import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import {router} from './routes/router';

//Instanciando al servidor
const server = new Server();
//Configuracion de bodyParser para que los argumantos lleguen por urlencoded lleguen en el arreglo 'body' de request
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//cors
server.app.use(cors({origin:true, credentials:true}))
//Configuracion de rutas
server.app.use('/',router);

//funcion inicio del servidor
server.start(()=>{
  console.log(`Servidor corriendo en el puerto ${server.port}`);
})
