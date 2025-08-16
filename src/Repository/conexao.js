import mysql from 'mysql2/promise'

 export let conexao = mysql.createConnection ({
    host: '127.0.0.1',
    user: 'root',
    password: '4321',
    database: 'shelby'
    //*database: maia (filmes)*/
    //*database: luu (estados)*/
    //*database: nardi (materialescolar)*/
    //*database: gust (vale_alimentação) */
    //*database: shelby (Ben10)*/
    //*database: enzima (Pizzas) */
    //*database: emaranhamento (Carros1) */
    //*database: palmeiras (padaria_parretos) */
    //*database: Drago (livros) */
    //*database: roland_garros (tênis) */
})
