const express = require('express')

const router = express.Router()

const controller = require('../controllers/pacientesController')

/**
 * @swagger
 * tags:
 *   name: Pacientes
 *   description: Gerenciamento de pacientes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - nome
 *         - cpf
 *         - dataNascimento
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         cpf:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date-time
 *         telefone:
 *           type: string
 *         email:
 *           type: string
 *         endereco:
 *           type: string
 */

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Lista todos os pacientes
 *     tags: [Pacientes]
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Busca paciente por ID
 *     tags: [Pacientes]
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Cria um paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Paciente'
 *     responses:
 *       201:
 *         description: Paciente criado
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza paciente
 *     tags: [Pacientes]
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Deleta paciente
 *     tags: [Pacientes]
 */
router.delete('/:id', controller.deletar)

module.exports = router