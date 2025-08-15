import { conexao } from "../conexao.js";

export async function ListarFilmes() {
    const comando = 'select * from filmes'

    let conection = await conexao
    let [registrar] = await conection.query(comando)

    return registrar
}

export async function InserirFilmes(params) {
    const comando = 'insert into filmes ( email_user, nm_filme, tp_genero, tmp_duracao, dt_data, bt_disponivel, qtd_nota) values ( ?, ?, ?, ?, ?, ?, ?)'

    let filmes = await conexao
    let [inserir] = await filmes.query(comando, [params.email_user, params.nm_filme, params.tp_genero, params.tmp_duracao, params.dt_data, params.bt_disponivel, params.qtd_nota])
    return inserir.insertId
}

export async function ConsultarFilmeID(id) {
    const comando = `select *
                    from filmes
                    where id_filmes = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltarFilme(nome) {
    const comando = `select *
                    from filmes
                    where nm_filme like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar    
}

export async function AlterarFilme(id, corpo) {
    const comando = `update filmes
                    set nm_filme = ?, 
                    tp_genero = ?
                    where id_filmes = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.nm_filme, corpo.tp_genero, id])
    return alterar 

}

export async function DeletarFilme(id) {
    const comando = `delete from filmes
                    where id_filmes = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}

