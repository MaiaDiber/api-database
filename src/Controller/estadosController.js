import * as estado from "../Repository/estadosRepository.js"

import { Router } from "express"
const endpointestado = Router()

endpointestado.get('/Consultar/Estados', async (req, resp) => {
    let estados = await estado.ListarEstado()
    resp.send(estados)
})

endpointestado.post('/Inserir/Estados', async (req, resp) => {
     let estados = req.body

    let id = await estado.InserirEstado(estados)

    resp.send({
        novoID: id
    })
    
})

endpointestado.get('/consultar/id-estado/:id', async (req, resp) => {
    let id = req.params.id

    let registros = await estado.ConsultarEstadoId(id)

    resp.send(registros)
    
})

endpointestado.get('/Filtrar/Nome', async (req, resp) => {
    let nome = req.query.nome

    let pegar = await estado.FiltarEstado(nome)

    resp.send(pegar)
})

endpointestado.put('/Alterar/id-estado/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await estado.AlterarEstado(id, corpo)

    resp.send({
        resp: 'estado alterado'
    })
})

endpointestado.delete('/Deletar/id-estado/:id', async (req, resp) => {
    let id = req.params.id

    await estado.DeletarEstado(id)
    resp.send({
        resp: 'estado deletado'
    })
})

endpointestado