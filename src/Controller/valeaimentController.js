import * as alimento from "../Repository/valealimeRepository.js"

import { Router } from "express"
const endpointaliemnto = Router()

endpointaliemnto.get('/Consultar/ValeAlimentacao', async (req, resp) => {

    let valealim = await alimento.ListarValeAlimentacao()
    resp.send(valealim)
})

endpointaliemnto.post('/Inserir/ValeAlimentacao', async (req, resp) => {
    let valealim = req.body

    let id = await alimento.InserirValeAlimentacao(valealim)
    resp.send({
        novoID: id
    })
})

endpointaliemnto.get('/Consultar/id-alimento/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await alimento.ConsultarAlimentoId(id)
    resp.send(dados)
})

endpointaliemnto.get('/Filtrar/Alimento', async (req, resp) => {
    let nome = req.query.nome

    let dados = await alimento.FiltrarAlimento(nome)

    resp.send(dados)
})

endpointaliemnto.put('/Alterar/Alimento/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await alimento.AlterarAlimento(id, corpo)

    resp.send({
        resp: 'alimento alterado'
    })
})
endpointaliemnto.delete('/Deletar/Alimento/:id', async (req, resp) => {
        let id = req.params.id
        
        await alimento.DeletarAlimento(id)

        resp.send({
            resp: 'alimento deletado'
        })
    })

export default endpointaliemnto