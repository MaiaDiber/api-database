import * as tenis from "../Repository/tenisRepository.js"

import { Router } from "express"
const endpointtenis = Router()

endpointtenis.get('/Consultar/Tenis', async (req, resp) => {

    let tenis = await tenis.ListarTenis()
    resp.send(tenis)
})

endpointtenis.post('/Inserir/Tenis', async (req, resp) => {
    let tenis = req.body

    let id = await tenis.InserirTenis(tenis)
    resp.send({
        novoID: id
    })
})

endpointtenis.get('/Consultar/Tenis/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await tenis.ConsultarTenisID(id)

    resp.send(dados)
})

endpointtenis.get('/Filtrar/Tenis', async (req, resp) => {
    let nome = req.query.nome

    let dados = await tenis.FiltrarTenis(nome)

    resp.send(dados)
})

endpointtenis.put('/Alterar/Tenis/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await tenis.AlterarTenis(id, corpo)

    resp.send({
        resp: 'tenis alterado'
    })
})

endpointtenis.delete('/Deletar/Tenis/:id', async (req, resp) => {
    let id = req.params.id

    await tenis.DeletarTenis(id)

    resp.send({
        resp: 'tenis deletado'
    })
})