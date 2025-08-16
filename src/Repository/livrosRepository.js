import { conexao } from "./conexao.js";

export async function ListarLivro() {
    const comando = 'select * from livros'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirLivro(params) {
    const comando = 'insert into livros (titulo, autor, ano_publicacao, genero, editora, preco) values ( ?, ?, ?, ?, ?, ?)'

    let conection = await conexao

    let [inserir] = await conection.query(comando, [params.titulo, params.autor, params.ano_publicacao, params.genero, params.editora, params.preco])
    return inserir.insertId
}

export async function ConsultarLivroId(id) {
    const comando = `select * from livros
                    where id = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarLivro(titulo) {
    const comando = `select *
                    from livros
                    where titulo like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + titulo + '%'])
    return filtrar
}

export async function AlterarLivro(id, corpo) {
    const comando = `update livros
                    set titulo = ?,
                    autor = ?
                    where id = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.titulo, corpo.autor, id])
    return alterar
}


export async function DeletarLivro(id) {
    const comando = `delete from livros
                    where id = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}