import { conexao } from "./conexao.js";

export async function ListarCarro() {
    const comando = 'select * from Carros1'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirCarro(params) {
    const comando = 'insert into Carros1 ( id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado) values ( ?, ?, ?, ?, ?, ?, ?)'

    let conection = await conexao
    let [inserir] = await conection.query(comando, [params.Valor, params.Placa, params.modelo, params.ano_fabricacao, params.cor, params.ar_condicionado])
    return inserir.insertId
}

export async function ConsultarCarroId(id) {
    const comando = `select * from Carros1
                    where id = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarCarro(placa) {
    const comando = `select *
                    from Carros1
                    where Placa like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + placa + '%'])
    return filtrar
}

export async function AlterarCarro(id, corpo) {
    const comando = `update Carros1
                    set valor = ?,
                    placa = ?
                    where id = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.Valor, corpo.Placa, id])
    return alterar
}


export async function DeletarCarro(id) {
    const comando = `delete from Carros1
                    where id = ?`

    let conection = await conexao
    let [deletar] = await conection.query(comando, [id])
    return deletar
}