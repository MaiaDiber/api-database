import * as livros from "../Repository/livrosRepository.js"

import { Router } from "express"
const endpointlivro = Router()

endpointlivro.get('/Consultar/Livro', async (req, resp) => {
    const livro = await livros.ListarLivro()

    resp.send(livro)
})

endpointlivro.post('/Inserir/Livro', async (req, resp) => {
    const livro = req.body

    let id = await livros.InserirLivro(livro)
    resp.send({
        novoID: id
    })
})

endpointlivro.get('/Consultar/id-livros/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await livros.ConsultarLivroId(id)
    resp.send(dados)
})

endpointlivro.get('/Filtrar/Livro', async (req, resp) => {
    let titulo = req.query.titulo

    let dados = await livros.FiltrarLivro(titulo)

    resp.send(dados)
})

endpointlivro.put('/Alterar/Livro/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await livros.AlterarLivro(id, corpo)

    resp.send({
        resp: 'livro alterado'
    })
})
endpointlivro.delete('/Deletar/Livro/:id', async (req, resp) => {
        let id = req.params.id
        
        await livros.DeletarLivro(id)

        resp.send({
            resp: 'livro deletado'
        })
    })

    export default endpointlivro