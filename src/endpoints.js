import { Router } from "express";
import { semaforo, diaSemana, sequencia, fatorial } from './services.js';
const server = Router();

server.get('/semaforo/:cor', (req, resp) => {
    try {
        const cor = req.params.cor;

        const x = semaforo(cor);
        resp.send({
            semaforo: x
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/diaSemana', (req, resp) => {
    try {
        const dia = req.query.dia;

        const x = diaSemana(dia);

        resp.send({ diaSemana: x });
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/sequencia', (req, resp) => {
    try {
        const numero = req.body.sequencia;

        const x = sequencia(numero)

        resp.send({
            sequencia: x
        })
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/fatorial', (req, resp) => {
    try {
        const n = req.body.fatorial;
        const x = fatorial(n); 
        
        resp.send({
            fatorial:x
        })
    } 
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server