import * as produtos from "../Repository/padaparreRepository.js"

import { Router } from "express"
const endpointproduto = Router()

endpointproduto.get('/Consultar/Produto', async (req, resp) => {

    let padaria = await produtos.ListarProduto()

    resp.send(padaria)
})

endpointproduto.post('/Inserir/Produto', async (req, resp) => {
    const padaria = req.body

    let id = await produtos.InserirProduto(padaria)
    resp.send({
        novoID: id
    })
})

endpointproduto.get('/Consultar/id-produto/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await produtos.ConsultarProdutoId(id)
    resp.send(dados)
})

endpointproduto.get('/Filtrar/Produto', async (req, resp) => {
    let nome = req.query.nome

    let dados = await produtos.FiltrarProduto(nome)

    resp.send(dados)
})

endpointproduto.put('/Alterar/Produto/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await produtos.AlterarProduto(id, corpo)

    resp.send({
        resp: 'produto alterado'
    })
})
endpointproduto.delete('/Deletar/Produto/:id', async (req, resp) => {
        let id = req.params.id
        
        await produtos.DeletarProduto(id)

        resp.send({
            resp: 'produto deletado'
        })
    })

    export default endpointproduto