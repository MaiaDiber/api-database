import { conexao } from "./conexao.js";

export async function ListarPizza() {
    const comando = 'select * from pizzaria_Benedito'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirPizza(params) {
    const comando = 'insert into pizzaria_Benedito (Sabor,Classificacao,Desconto,Desconto_disponivel,Preco) values ( ?, ?, ?, ?, ?)'

    let conection = await conexao
    let [inserir] = await conection.query(comando, [params.Sabor, params.Classificacao, params.Desconto, params.Desconto_disponivel, params.Preco])
    return inserir.insertId
}

export async function ConsultarPizzaId(id) {
    const comando = `select * from pizzaria_Benedito
                    where id_calabresu = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarPizza(nome) {
    const comando = `select *
                    from pizzaria_Benedito
                    where sabor like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarPizza(id, corpo) {
    const comando = `update pizzaria_Benedito
                    set sabor = ?,
                    Classificacao = ?
                    where id_calabresu = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.Sabor, corpo.Classificacao, id])
    return alterar
}


export async function DeletarPizza(id) {
    const comando = `delete from pizzaria_Benedito
                    where id_calabresu = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}