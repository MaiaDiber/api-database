import { conexao } from "./conexao.js";

export async function ListarEstado() {
    const comando = 'select * from tb_estados'

    let conection = await conexao
    let [registrar] = await conection.query(comando)

    return registrar
}

export async function InserirEstado(params) {
    const comando = 'insert into tb_estados (nm_estado, nm_regiao, ds_territorio, qtd_populacao, bt_disp_estado) values ( ?, ?, ?, ?, ?)'
    
    let conection = await conexao
    let [inserir] = await conection.query(comando, [params.nm_estado, params.nm_regiao, params.ds_territorio, params.qtd_populacao, params.bt_disp_estado])
    return inserir.insertId
}

export async function ConsultarEstadoId(id) {
    const comando = `select * 
                    from tb_estados
                    where id_estado = ?`

    let conection = await conexao
    let [registros] = await conection.query(comando, [id]);
    return registros[0];
}

export async function FiltarEstado(nome) {
    const comando = `select *
                    from tb_estados
                    where nm_estado like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarEstado(id, corpo) {
    const comando = `update tb_estados
                    set nm_estado = ?,
                     nm_regiao = ?
                        where id_estado = ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.nm_estados, corpo.nm_regiao, id])
    return alterar 
             
}

export async function DeletarEstado(id) {
    const comando = `delete from tb_estados
                    where id_estado = ?`

    let conection = await conexao

    let [deletar] = await conection.query(comando, [id])
    return deletar
}