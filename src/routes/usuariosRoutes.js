const express = require('express')

const router = express.Router()

const controller = require('../controllers/usuariosController')

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - senha
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         senha:
 *           type: string
 *         perfil:
 *           type: string
 *         criadoEm:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/', controller.listar)

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Usuário encontrado
 */
router.get('/:id', controller.buscarPorId)

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/', controller.criar)

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza usuário
 *     tags: [Usuarios]
 */
router.put('/:id', controller.atualizar)

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deleta usuário
 *     tags: [Usuarios]
 */
router.delete('/:id', controller.deletar)

module.exports = router