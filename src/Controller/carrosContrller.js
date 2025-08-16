import * as carros from "../Repository/carros1Repository.js"

import { Router } from "express"
const endpointcarro = Router()


endpointcarro.get('/Consultar/Carro', async (req, resp) => {
    const carro = await carros.ListarCarro()

    resp.send(carro)
})

endpointcarro.post('/Inserir/Carro', async (req, resp) => {
    const carro = req.body

    let id = await carros.InserirCarro(carro)

    resp.send({
        novoID: id
    })
})

endpointcarro.get('/Consultar/id-carro/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await carros.ConsultarCarroId(id)
    resp.send(dados)
})

endpointcarro.get('/Filtrar/Carro', async (req, resp) => {
    let placa = req.query.placa

    let dados = await carros.FiltrarCarro(placa)

    resp.send(dados)
})

endpointcarro.put('/Alterar/Carro/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await carros.AlterarCarro(id, corpo)

    resp.send({
        resp: 'carro alterado'
    })
})
endpointcarro.delete('/Deletar/Carro/:id', async (req, resp) => {
        let id = req.params.id
        
        await carros.DeletarCarro(id)

        resp.send({
            resp: 'carro deletado'
        })
    })

    export default endpointcarro