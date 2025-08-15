import * as estado from './Repositorios/estadosRepository.js'
import * as filmes from './Repositorios/filmesRepository.js'
import * as material from './Repositorios/matescoRepository.js'
import * as alimento from './Repositorios/valealimeRepository.js'
import * as heroi from './Repositorios/ben10Repository.js'
import * as pizzas from './Repositorios/pizzariaRepository.js'
import * as carros from './Repositorios/carros1Repository.js'
import * as produtos from './Repositorios/padaparreRepository.js'
import * as livros from './Repositorios/livrosRepository.js'
import * as tenis from './Repositorios/tenisRepository.js'

import express from 'express'
let api = express()
api.use(express.json())

api.listen(3751, () => console.log('...API SOLICITADA'))

api.get('/soma/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2

    resp.send({
        resposta: soma
    })
})

api.get('/subtracao', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let sub = n1 - n2

    resp.send({
        resposta: sub
    })
})

api.post('/multiplicacao', (req, resp) => {
    let n1 = req.body.n1
    let n2 = req.body.n2

    let multi = n1 * n2

    resp.send({
        resposta: multi
    })
})

/*Estados */
api.get('/Consultar/Estados', async (req, resp) => {
    let estados = await estado.ListarEstado()
    resp.send(estados)
})

api.post('/Inserir/Estados', async (req, resp) => {
     let estados = req.body

    let id = await estado.InserirEstado(estados)

    resp.send({
        novoID: id
    })
    
})

api.get('/consultar/id-estado/:id', async (req, resp) => {
    let id = req.params.id

    let registros = await estado.ConsultarEstadoId(id)

    resp.send(registros)
    
})

api.get('/Filtrar/Nome', async (req, resp) => {
    let nome = req.query.nome

    let pegar = await estado.FiltarEstado(nome)

    resp.send(pegar)
})

api.put('/Alterar/id-estado/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await estado.AlterarEstado(id, corpo)

    resp.send({
        resp: 'estado alterado'
    })
})

api.delete('/Deletar/id-estado/:id', async (req, resp) => {
    let id = req.params.id

    await estado.DeletarEstado(id)
    resp.send({
        resp: 'estado deletado'
    })
})
/* FIM*/

/* FILMES*/
api.get('/Consultar/Filmes', async (req, resp) => {
    let filmes = await filmes.ListarFilmes()
    resp.send(filmes)
})

api.post('/Inserir/Filmes', async (req, resp) => {
    let filmes = req.body

    let id = await filmes.InserirFilmes(filmes)
    resp.send({
        novoID: id
    })

})

api.get('/Consultar/id-filme/:id', async (req, resp) => {
    let id = req.params.id

    let registro = await filmes.ConsultarFilmeID(id)
    
    resp.send(registro)

})

api.get('/Filtrar/Filme', async (req, resp) => {
    let nome = req.query.nome

    let pegar = await filmes.FiltarFilme(nome)

    resp.send(pegar)
})

api.put('/Alterar/Filmes/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await filmes.AlterarFilme(id, corpo)

    resp.send({
        resp: 'filme alterado'
    })
})

api.delete('/Deletar/Filme/:id', async (req, resp) => {
    let id = req.params.id

    await filmes.DeletarFilme(id)

    resp.send({
        resp: 'filme deletado'
    })
})
/* FIM*/

//*Material Escolar */
api.get('/Consultar/MateriaisEscolares', async (req, resp) => {
    
    let matesco = await material.ListarMaterialEscolar()
    resp.send(matesco)
})

api.post('/Inserir/MateriaisEscolares', async (req, resp) => {
    let matesco = req.body

    let id = await material.InserirMaterialEscolar(matesco)
    
    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-material/:id', async (req, resp) =>{
    let id = req.params.id

    let registro = await material.ConsultarMaterialId(id)

    resp.send(registro)
})

api.get('/Filtrar/Material', async (req, resp) => {
    let nome = req.query.nome

    let dados = await material.FiltrarMaterial(nome)

    resp.send(dados)

})

api.put('/Alterar/Material/:id', async (req, resp) => {
    let id = req.params.id
    let nome = req.body

    await material.AlterarMaterial(id, nome)

    resp.send({
        resp: 'material alterado'
    })
})

api.delete('/Deletar/Material/:id', async (req, resp) => {
    let id = req.params.id

    await material.DeletarMaterial(id)

    resp.send({
        resp: 'material deletado'
    })

    
})
//*FIM */

//* Vale_Alimentação */
api.get('/Consultar/ValeAlimentacao', async (req, resp) => {

    let valealim = await alimento.ListarValeAlimentacao()
    resp.send(valealim)
})

api.post('/Inserir/ValeAlimentacao', async (req, resp) => {
    let valealim = req.body

    let id = await alimento.InserirValeAlimentacao(valealim)
    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-alimento/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await alimento.ConsultarAlimentoId(id)
    resp.send(dados)
})

api.get('/Filtrar/Alimento', async (req, resp) => {
    let nome = req.query.nome

    let dados = await alimento.FiltrarAlimento(nome)

    resp.send(dados)
})

api.put('/Alterar/Alimento/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await alimento.AlterarAlimento(id, corpo)

    resp.send({
        resp: 'alimento alterado'
    })
})
api.delete('/Deletar/Alimento/:id', async (req, resp) => {
        let id = req.params.id
        
        await alimento.DeletarAlimento(id)

        resp.send({
            resp: 'alimento deletado'
        })
    })

//* FIM */

//*BEN10 */
api.get('/Consultar/Heroi', async (req, resp) => {

    let heroi = await heroi.ListarHeroi()

    resp.send(heroi)
})

api.post('/Inserir/Heroi', async (req, resp) => {
    let heroi = req.body

    let id = await heroi.InserirHeroi(heroi)

    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-heroi/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await heroi.ConsultarHeroiId(id)
    resp.send(dados)
})

api.get('/Filtrar/Heroi', async (req, resp) => {
    let nome = req.query.nome

    let dados = await heroi.FiltrarHeroi(nome)

    resp.send(dados)
})

api.put('/Alterar/Heroi/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await heroi.AlterarHeroi(id, corpo)

    resp.send({
        resp: 'herói alterado'
    })
})
api.delete('/Deletar/Heroi/:id', async (req, resp) => {
        let id = req.params.id
        
        await heroi.DeletarHeroi(id)

        resp.send({
            resp: 'herói deletado'
        })
    })
//*FIM */

//*PIZZARIA */
api.get('/Consultar/Pizza', async (req, resp) => {
    let pizza = await pizzas.ListarPizza()

    resp.send(pizza)
})

api.post('/Inserir/Pizza', async (req, resp) => {
    const pizza = req.body

    let id = await pizzas.InserirPizza(pizza)

    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-pizza/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await pizzas.ConsultarPizzaId(id)
    resp.send(dados)
})

api.get('/Filtrar/Pizza', async (req, resp) => {
    let nome = req.query.nome

    let dados = await pizzas.FiltrarPizza(nome)

    resp.send(dados)
})

api.put('/Alterar/Pizza/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await pizzas.AlterarPizza(id, corpo)

    resp.send({
        resp: 'pizza alterado'
    })
})
api.delete('/Deletar/Pizza/:id', async (req, resp) => {
        let id = req.params.id
        
        await pizzas.DeletarPizza(id)

        resp.send({
            resp: 'pizza deletado'
        })
    })
//*FIM */

//* Carros */
api.get('/Consultar/Carro', async (req, resp) => {
    const carro = await pizzas.ListarPizza()

    resp.send(carro)
})

api.post('/Inserir/Carro', async (req, resp) => {
    const carro = req.body

    let id = await carros.InserirCarro(carro)

    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-carro/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await carros.ConsultarCarroId(id)
    resp.send(dados)
})

api.get('/Filtrar/Carro', async (req, resp) => {
    let placa = req.query.placa

    let dados = await carros.FiltrarCarro(placa)

    resp.send(dados)
})

api.put('/Alterar/Carro/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await carros.AlterarCarro(id, corpo)

    resp.send({
        resp: 'carro alterado'
    })
})
api.delete('/Deletar/Carro/:id', async (req, resp) => {
        let id = req.params.id
        
        await carros.DeletarCarro(id)

        resp.send({
            resp: 'carro deletado'
        })
    })
//*FIM */

//*PADARIA */
api.get('/Consultar/Produto', async (req, resp) => {

    let padaria = await produtos.ListarProduto()

    resp.send(padaria)
})

api.post('/Inserir/Produto', async (req, resp) => {
    const padaria = req.body

    let id = await produtos.InserirProduto(padaria)
    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-produto/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await produtos.ConsultarProdutoId(id)
    resp.send(dados)
})

api.get('/Filtrar/Produto', async (req, resp) => {
    let nome = req.query.nome

    let dados = await produtos.FiltrarProduto(nome)

    resp.send(dados)
})

api.put('/Alterar/Produto/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await produtos.AlterarProduto(id, corpo)

    resp.send({
        resp: 'produto alterado'
    })
})
api.delete('/Deletar/Produto/:id', async (req, resp) => {
        let id = req.params.id
        
        await produtos.DeletarProduto(id)

        resp.send({
            resp: 'produto deletado'
        })
    })
//*FIM */

//*LIVROS */
api.get('/Consultar/Livro', async (req, resp) => {
    const livro = await livros.ListarLivro()

    resp.send(livro)
})

api.post('/Inserir/Livro', async (req, resp) => {
    const livro = req.body

    let id = await livros.InserirLivro(livro)
    resp.send({
        novoID: id
    })
})

api.get('/Consultar/id-livros/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await livros.ConsultarLivroId(id)
    resp.send(dados)
})

api.get('/Filtrar/Livro', async (req, resp) => {
    let titulo = req.query.titulo

    let dados = await livros.FiltrarLivro(titulo)

    resp.send(dados)
})

api.put('/Alterar/Livro/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await livros.AlterarLivro(id, corpo)

    resp.send({
        resp: 'livro alterado'
    })
})
api.delete('/Deletar/Livro/:id', async (req, resp) => {
        let id = req.params.id
        
        await livros.DeletarLivro(id)

        resp.send({
            resp: 'livro deletado'
        })
    })
//*FIM */

//*TENIS */
api.get('/Consultar/Tenis', async (req, resp) => {

    let tenis = await tenis.ListarTenis()
    resp.send(tenis)
})

api.post('/Inserir/Tenis', async (req, resp) => {
    let tenis = req.body

    let id = await tenis.InserirTenis(tenis)
    resp.send({
        novoID: id
    })
})

api.get('/Consultar/Tenis/:id', async (req, resp) => {
    let id = req.params.id

    let dados = await tenis.ConsultarTenisID(id)

    resp.send(dados)
})

api.get('/Filtrar/Tenis', async (req, resp) => {
    let nome = req.query.nome

    let dados = await tenis.FiltrarTenis(nome)

    resp.send(dados)
})

api.put('/Alterar/Tenis/:id', async (req, resp) => {
    let id = req.params.id
    let corpo = req.body

    await tenis.AlterarTenis(id, corpo)

    resp.send({
        resp: 'tenis alterado'
    })
})

api.delete('/Deletar/Tenis/:id', async (req, resp) => {
    let id = req.params.id

    await tenis.DeletarTenis(id)

    resp.send({
        resp: 'tenis deletado'
    })
})
//*FIM */