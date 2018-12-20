import { Router, Request, Response } from 'express';
import Server from '../classes/server';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
  res.status(200).send({
    ok: true,
    mensaje: "mensaje correcto"
  });
});

router.post('/mensajes', (req: Request, res: Response) => {
  var entrada = req.body.entrada;
  res.status(200).send(
    {
      ok: true,
      mensaje: "mensaje correcto",
      entrada: entrada,
    });

  router.post('/mensajes/:id', (req: Request, res: Response) => {
    var entrada = req.body.entrada;
    var de = req.body.de;
    var id = req.params.id;
    const payload = {
      entrada: entrada,
      de: de
    }
    const server = Server.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    res.status(200).send(
      {
        ok: true,
        mensaje: "mensaje correcto",
        entrada: entrada,
        id: id,
      });
  });
});

router.post('/mensajesAll', (req: Request, res: Response) => {
  var entrada = req.body.entrada;
  var de = req.body.de;
  //var id = req.params.id;
  const payload = {
    entrada: entrada,
    de: de
  }
  const server = Server.instance;
  server.io.emit('mensaje-servidor', payload);
  res.status(200).send(
    {
      ok: true,
      mensaje: "mensaje correcto",
      entrada: entrada
    });
});
