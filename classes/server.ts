//Importacion de libreria express
import express from "express";
import {SERVER_PORT} from "../globals/environment";
//Clase del Servidor
export default class Server {
  //Variables del servidor
    public app:express.Application;
    public port:Number;

  //Constructor de Server
  constructor () {
    this.app = express();
    this.port = SERVER_PORT;
  }
  //Funcion de inicio del servidor
  public start(callback:Function){
    this.app.listen(this.port,callback);
  }
}
