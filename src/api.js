import { adiconarRotas } from './rotas.js'

import express from 'express'
let api = express()
api.use(express.json())

adiconarRotas(api)

api.listen(3751, () => console.log('...API SOLICITADA'))

