import { conexao } from "../conexao.js";

export async function ListarProduto() {
    const comando = 'select * from Padaria_Parretos'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirProduto(params) {
    const comando = 'insert into Padaria_Parretos (Nome_produto, Categoria_produto, Preço, Validade, Disponível) values ( ?, ?, ?, ?, ?)'

    let conection = await conexao

    let [inserir] = await conection.query(comando, [params.Nome_produto, params.Categoria_produto, params.Preço, params.Validade, params.Disponível])
    return inserir.insertId

}

export async function ConsultarProdutoId(id) {
    const comando = `select * from Padaria_Parretos
                    where id = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarProduto(nome) {
    const comando = `select *
                    from Padaria_Parretos
                    where Nome_produto like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarProduto(id, corpo) {
    const comando = `update Padaria_Parretos
                    set Nome_produto = ?,
                    Categoria_produto = ?
                    where id = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.Nome_produto, corpo.Categoria_produto, id])
    return alterar
}


export async function DeletarProduto(id) {
    const comando = `delete from Padaria_Parretos
                    where id = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}