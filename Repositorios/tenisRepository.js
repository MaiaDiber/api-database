import { conexao } from "../conexao.js";

export async function ListarTenis() {
    const comando = 'select * from tenis'

    let conection = await conexao

    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirTenis(params) {
    const comando = 'insert into tenis (nome, marca, cor, tamanho, preco, categoria, estoque) values ( ?, ?, ?, ?, ?, ?, ?)'

    let conection = await conexao

    let [inserir] = await conection.query(comando, [params.nome, params.marca, params.cor, params.tamanho, params.preco, params.categoria, params. estoque])
    return inserir.insertId
}

export async function ConsultarTenisID(id) {
    const comando = `select * from tenis
                    where id = ?`

    let conection = await conexao
    let [registrar] = await conection.query(comando, [id])
    return registrar
}

export async function  FiltrarTenis(nome) {
    const comando = `select *
                    from tenis
                    where nome like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarTenis(id, corpo) {
    const comando = `update tenis
                    set nome = ?,
                    marca = ?
                    where id = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.nome, corpo.marca, id])
    return alterar
}

export async function DeletarTenis(id) {
    const comando = `delete from tenis
                    where id = ?`

    let conection = await conexao 
    let [deletar] = await conection.query(comando, [id])
    return deletar
}