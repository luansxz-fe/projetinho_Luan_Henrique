const express = require('express')
const cors = require('cors')
require('dotenv').config()

const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const usuariosRoutes = require('./routes/usuariosRoutes')
const pacientesRoutes = require('./routes/pacientesRoutes')
const medicosRoutes = require('./routes/medicosRoutes')
const especialidadesRoutes = require('./routes/especialidadesRoutes')
const consultasRoutes = require('./routes/consultasRoutes')

const app = express()

app.use(cors())
app.use(express.json())

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sistema Clínica API',
      version: '1.0.0',
      description: 'API completa da clínica médica'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/usuarios', usuariosRoutes)
app.use('/pacientes', pacientesRoutes)
app.use('/medicos', medicosRoutes)
app.use('/especialidades', especialidadesRoutes)
app.use('/consultas', consultasRoutes)

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API funcionando'
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Swagger: http://localhost:${PORT}/docs`)
})