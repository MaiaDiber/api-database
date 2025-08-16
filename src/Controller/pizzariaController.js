import * as pizzas from "../Repository/pizzariaRepository.js"

import { Router } from "express"
const endpointpizza = Router()

endpointpizza.get('/Consultar/Pizza', async (req, resp) => {
    let pizza = await pizzas.ListarPizza()

    resp.send(pizza)
})

endpointpizza.post('/Inserir/Pizza', async (req, resp) => {
    const pizza = req.body

    let id = await pizzas.InserirPizza(pizza)

    resp.send({
        novoID: id
    })
})

endpointpizza.get('/Consultar/id-pizza/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await pizzas.ConsultarPizzaId(id)
    resp.send(dados)
})

endpointpizza.get('/Filtrar/Pizza', async (req, resp) => {
    let nome = req.query.nome

    let dados = await pizzas.FiltrarPizza(nome)

    resp.send(dados)
})

endpointpizza.put('/Alterar/Pizza/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await pizzas.AlterarPizza(id, corpo)

    resp.send({
        resp: 'pizza alterado'
    })
})
endpointpizza.delete('/Deletar/Pizza/:id', async (req, resp) => {
        let id = req.params.id
        
        await pizzas.DeletarPizza(id)

        resp.send({
            resp: 'pizza deletado'
        })
    })

    export default endpointpizza