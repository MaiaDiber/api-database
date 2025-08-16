import * as heroi from "../Repository/ben10Repository.js"

import { Router } from "express"
const endpointben10 = Router()

endpointben10.get('/Consultar/Heroi', async (req, resp) => {

    let dados = await heroi.ListarHeroi()

    resp.send(dados)
})

endpointben10.post('/Inserir/Heroi', async (req, resp) => {
    let dados = req.body

    let id = await heroi.InserirHeroi(dados)

    resp.send({
        novoID: id
    })
})

endpointben10.get('/Consultar/id-heroi/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await heroi.ConsultarHeroiId(id)
    resp.send(dados)
})

endpointben10.get('/Filtrar/Heroi', async (req, resp) => {
    let nome = req.query.nome

    let dados = await heroi.FiltrarHeroi(nome)

    resp.send(dados)
})

endpointben10.put('/Alterar/Heroi/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await heroi.AlterarHeroi(id, corpo)

    resp.send({
        resp: 'herói alterado'
    })
})
endpointben10.delete('/Deletar/Heroi/:id', async (req, resp) => {
        let id = req.params.id
        
        await heroi.DeletarHeroi(id)

        resp.send({
            resp: 'herói deletado'
        })
    })

export default endpointben10