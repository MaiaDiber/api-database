import { conexao } from "../conexao.js";

export async function ListarMaterialEscolar(){
    const comando = 'select * from materiaisEscolares'

    let conection = await conexao
    let [registrar] = await conection.query(comando)
    return registrar
}

export async function InserirMaterialEscolar(params) {
    const comando = 'insert into materiaisEscolares (nm_material, nm_marca, qtd_materialloja, ds_cor, vl_material, bt_disponivel) values ( ?, ?, ?, ?, ?, ?)'

    let conection = await conexao
    let [inserir] = await conection.query (comando, [params.nm_material, params.nm_marca, params.qtd_materialloja, params.ds_cor, params.vl_material, params.bt_disponivel])
    return inserir.insertId
}

export async function ConsultarMaterialId(id) {
    const comando = `select * 
                    from materiaisEscolares 
                    where id_material = ?`

    let conection = await conexao
    let [registro] = await conection.query(comando, [id])
    return registro
}

export async function FiltrarMaterial(nome) {
    const comando = `select *
                    from materiaisEscolares
                    where nm_material like ?`

    let conection = await conexao
    let [filtrar] = await conection.query(comando, ['%' + nome + '%'])
    return filtrar
}

export async function AlterarMaterial(id, corpo) {
    const comando = `update materiaisEscolares
                    set nm_material = ?,
                    nm_marca = ?
                    where id_material= ?`

    let conection = await conexao
    let [alterar] = await conection.query(comando, [corpo.nm_material, corpo.nm_marca, id])
    return alterar
}

export async function DeletarMaterial(id) {
    const comando = `delete from materiaisEscolares
                    where id_material = ?`

    let conection = await conexao
    let [deletado] = await conection.query(comando, [id])
    return deletado
}

