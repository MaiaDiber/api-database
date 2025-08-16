import * as material from "../Repository/matescoRepository.js"

import { Router } from "express"
const endpointmaterial = Router()

endpointmaterial.get('/Consultar/MateriaisEscolares', async (req, resp) => {
    
    let matesco = await material.ListarMaterialEscolar()
    resp.send(matesco)
})

endpointmaterial.post('/Inserir/MateriaisEscolares', async (req, resp) => {
    let matesco = req.body

    let id = await material.InserirMaterialEscolar(matesco)
    
    resp.send({
        novoID: id
    })
})

endpointmaterial.get('/Consultar/id-material/:id', async (req, resp) =>{
    let id = req.params.id

    let registro = await material.ConsultarMaterialId(id)

    resp.send(registro)
})

endpointmaterial.get('/Filtrar/Material', async (req, resp) => {
    let nome = req.query.nome

    let dados = await material.FiltrarMaterial(nome)

    resp.send(dados)

})

endpointmaterial.put('/Alterar/Material/:id', async (req, resp) => {
    let id = req.params.id
    let nome = req.body

    await material.AlterarMaterial(id, nome)

    resp.send({
        resp: 'material alterado'
    })
})

endpointmaterial.delete('/Deletar/Material/:id', async (req, resp) => {
    let id = req.params.id

    await material.DeletarMaterial(id)

    resp.send({
        resp: 'material deletado'
    })

    
})

export default endpointmaterial