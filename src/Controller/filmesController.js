import * as filmes from "../Repository/filmesRepository.js"

import { Router } from "express"
const endpointfilme = Router()

endpointfilme.get('/Consultar/Filmes', async (req, resp) => {
    let filme = await filmes.ListarFilmes()
    resp.send(filme)
})

endpointfilme.post('/Inserir/Filmes', async (req, resp) => {
    let filme = req.body

    let id = await filmes.InserirFilmes(filme)
    resp.send({
        novoID: id
    })

})

endpointfilme.get('/Consultar/id-filme/:id', async (req, resp) => {
    let id = req.params.id

    let registro = await filmes.ConsultarFilmeID(id)
    
    resp.send(registro)

})

endpointfilme.get('/Filtrar/Filme', async (req, resp) => {
    let nome = req.query.nome

    let pegar = await filmes.FiltarFilme(nome)

    resp.send(pegar)
})

endpointfilme.put('/Alterar/Filmes/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await filmes.AlterarFilme(id, corpo)

    resp.send({
        resp: 'filme alterado'
    })
})

endpointfilme.delete('/Deletar/Filme/:id', async (req, resp) => {
    let id = req.params.id

    await filmes.DeletarFilme(id)

    resp.send({
        resp: 'filme deletado'
    })
})

export default endpointfilme