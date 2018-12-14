import { Router, Request, Response } from "express";

export var router = Router();

router.get('/mensajes',(req: Request, res: Response) =>{
  res.status(200).send(
    {
      ok: true,
      mensaje: 'Mensaje Correcto'
    });
});
router.post('/mensajes', (req: Request, res: Response) =>{
  var entrada = req.body.entrada;
  res.status(200).send(
    {
      ok: true,
      mensaje: 'Mensaje Correcto',
      entrada: entrada
    });
});
router.post('/mensajes/:id',(req: Request, res: Response) =>{
  var entrada = req.body.entrada;
  var id = req.params.id;
  res.status(200).send(
    {
      ok: true,
      mensaje: 'Mensaje Correcto',
      entrada: entrada,
      id: id
    });
});
