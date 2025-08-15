import { conexao } from "../conexao.js";

export async function ListarHeroi() {
    const comando = 'select * from ben10'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirHeroi(params) {
    const comando = 'insert into ben10 ( herói, planeta_ou_estrela, poder, versão_desenho) values ( ?, ?, ?, ?)'

    let conection = await conexao
    let [inserir] = await conection.query(comando, [params.herói, params.planeta_ou_estrela, params.poder, params.versão_desenho])
    return inserir.insertId
}

export async function ConsultarHeroiId(id) {
    const comando = `select * from ben10
                    where id = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarHeroi(nome) {
    const comando = `select *
                    from ben10
                    where herói like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarHeroi(id, corpo) {
    const comando = `update ben10
                    set herói = ?,
                    poder = ?
                    where id = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.herói, corpo.poder, id])
    return alterar
}


export async function DeletarHeroi(id) {
    const comando = `delete from ben10
                    where id = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}