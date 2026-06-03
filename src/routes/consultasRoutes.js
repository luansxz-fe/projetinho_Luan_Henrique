const express = require('express')

const router = express.Router()

const controller = require('../controllers/consultasController')

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Gerenciamento de consultas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Consulta:
 *       type: object
 *       required:
 *         - dataConsulta
 *         - valor
 *         - pacienteId
 *         - medicoId
 *         - usuarioId
 *       properties:
 *         id:
 *           type: integer
 *         dataConsulta:
 *           type: string
 *           format: date-time
 *         observacao:
 *           type: string
 *         status:
 *           type: string
 *         valor:
 *           type: number
 *         pacienteId:
 *           type: integer
 *         medicoId:
 *           type: integer
 *         usuarioId:
 *           type: integer
 */

/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Lista todas consultas
 *     tags: [Consultas]
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /consultas/{id}:
 *   get:
 *     summary: Busca consulta por ID
 *     tags: [Consultas]
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria consulta
 *     tags: [Consultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Consulta'
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /consultas/{id}:
 *   put:
 *     summary: Atualiza consulta
 *     tags: [Consultas]
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /consultas/{id}:
 *   delete:
 *     summary: Deleta consulta
 *     tags: [Consultas]
 */
router.delete('/:id', controller.deletar)

module.exports = router