const express = require('express')

const router = express.Router()

const controller = require('../controllers/medicosController')

/**
 * @swagger
 * tags:
 *   name: Medicos
 *   description: Gerenciamento de médicos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Medico:
 *       type: object
 *       required:
 *         - nome
 *         - crm
 *         - valorConsulta
 *         - especialidadeId
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         crm:
 *           type: string
 *         telefone:
 *           type: string
 *         email:
 *           type: string
 *         valorConsulta:
 *           type: number
 *         especialidadeId:
 *           type: integer
 */

/**
 * @swagger
 * /medicos:
 *   get:
 *     summary: Lista todos os médicos
 *     tags: [Medicos]
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /medicos/{id}:
 *   get:
 *     summary: Busca médico por ID
 *     tags: [Medicos]
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /medicos:
 *   post:
 *     summary: Cria médico
 *     tags: [Medicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Medico'
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /medicos/{id}:
 *   put:
 *     summary: Atualiza médico
 *     tags: [Medicos]
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /medicos/{id}:
 *   delete:
 *     summary: Deleta médico
 *     tags: [Medicos]
 */
router.delete('/:id', controller.deletar)

module.exports = router