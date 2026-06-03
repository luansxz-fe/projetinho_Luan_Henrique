const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  try {
    const especialidades = await prisma.especialidade.findMany({
      include: {
        medicos: true
      }
    })
    res.json(especialidades)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const buscarPorId = async (req, res) => {
  try {
    const especialidade = await prisma.especialidade.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        medicos: true
      }
    })
    res.json(especialidade)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const criar = async (req, res) => {
  try {
    const {
      nome,
      descricao
    } = req.body
    const especialidade = await prisma.especialidade.create({
      data: {
        nome,
        descricao
      }
    })
    res.status(201).json(especialidade)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const atualizar = async (req, res) => {
  try {
    const {
      nome,
      descricao
    } = req.body
    const especialidade = await prisma.especialidade.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        nome,
        descricao
      }
    })
    res.json(especialidade)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const deletar = async (req, res) => {
  try {
    await prisma.especialidade.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json({
      mensagem: 'Especialidade deletada com sucesso'
    })
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
}