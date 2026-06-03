const express = require('express')

const router = express.Router()

const controller = require('../controllers/especialidadesController')

/**
 * @swagger
 * tags:
 *   name: Especialidades
 *   description: Gerenciamento de especialidades
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Especialidade:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 */

/**
 * @swagger
 * /especialidades:
 *   get:
 *     summary: Lista todas especialidades
 *     tags: [Especialidades]
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /especialidades/{id}:
 *   get:
 *     summary: Busca especialidade por ID
 *     tags: [Especialidades]
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /especialidades:
 *   post:
 *     summary: Cria especialidade
 *     tags: [Especialidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Especialidade'
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /especialidades/{id}:
 *   put:
 *     summary: Atualiza especialidade
 *     tags: [Especialidades]
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /especialidades/{id}:
 *   delete:
 *     summary: Deleta especialidade
 *     tags: [Especialidades]
 */
router.delete('/:id', controller.deletar)

module.exports = router