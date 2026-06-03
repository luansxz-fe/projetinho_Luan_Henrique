const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: {
        consultas: true
      }
    })
    res.json(usuarios)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const buscarPorId = async (req, res) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        consultas: true
      }
    })
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const criar = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        perfil
      }
    })
    res.status(201).json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const atualizar = async (req, res) => {
  try {
    const { nome, email, senha, perfil } = req.body
    const usuario = await prisma.usuario.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        nome,
        email,
        senha,
        perfil
      }
    })
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const deletar = async (req, res) => {
  try {
    await prisma.usuario.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json({
      mensagem: 'Usuário deletado com sucesso'
    })
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
}