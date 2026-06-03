const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  try {
    const pacientes = await prisma.paciente.findMany({
      include: {
        consultas: true
      }
    })
    res.json(pacientes)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const buscarPorId = async (req, res) => {
  try {
    const paciente = await prisma.paciente.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        consultas: true
      }
    })
    res.json(paciente)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const criar = async (req, res) => {
  try {
    const paciente = await prisma.paciente.create({
      data: req.body
    })
    res.status(201).json(paciente)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const atualizar = async (req, res) => {
  try {
    const paciente = await prisma.paciente.update({
      where: {
        id: Number(req.params.id)
      },
      data: req.body
    })
    res.json(paciente)
  } catch (error) {
    res.status(500).json({ erro: error.message })
  }
}
const deletar = async (req, res) => {
  try {
    await prisma.paciente.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json({
      mensagem: 'Paciente deletado'
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