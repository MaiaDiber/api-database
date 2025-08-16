import { conexao } from "./conexao.js";

export async function ListarValeAlimentacao() {
    const comando = 'select * from vale_alimentação'

    let conection = await conexao
    let [registro] = await conection.query(comando)
    return registro
}

export async function InserirValeAlimentacao(params) {
    const comando = 'insert into vale_alimentação (nomeAlimento, regiaoComida, valorProduto, salarioFuncionario, disponivel, estoque) value ( ?, ?, ?, ?, ?, ?)'

    let conection = await conexao
    let [inserir] = await conection.query(comando, [params.nomeAlimento, params.regiaoComida, params.valorProduto, params.salarioFuncionario, params.disponivel, params.estoque])
    return inserir.insertId
}

export async function ConsultarAlimentoId(id) {
    const comando = `select * from vale_alimentação
                    where comida = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarAlimento(nome) {
    const comando = `select *
                    from vale_alimentação
                    where nomeAlimento like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarAlimento(id, corpo) {
    const comando = `update vale_alimentação
                    set nomeAlimento = ?,
                    regiaoComida = ?
                    where comida = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.nomeAlimento, corpo.regiaoComida, id])
    return alterar
}


export async function DeletarAlimento(id) {
    const comando = `delete from vale_alimentação
                    where comida = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}