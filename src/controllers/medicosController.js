const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  try {
    const medicos = await prisma.medico.findMany({
      include: {
        especialidade: true,
        consultas: true
      }
    })
    res.json(medicos)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const buscarPorId = async (req, res) => {
  try {
    const medico = await prisma.medico.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        especialidade: true,
        consultas: true
      }
    })
    res.json(medico)
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
      crm,
      telefone,
      email,
      valorConsulta,
      especialidadeId
    } = req.body
    const medico = await prisma.medico.create({
      data: {
        nome,
        crm,
        telefone,
        email,
        valorConsulta,
        especialidadeId
      }
    })
    res.status(201).json(medico)
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
      crm,
      telefone,
      email,
      valorConsulta,
      especialidadeId
    } = req.body
    const medico = await prisma.medico.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        nome,
        crm,
        telefone,
        email,
        valorConsulta,
        especialidadeId
      }
    })
    res.json(medico)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const deletar = async (req, res) => {
  try {
    await prisma.medico.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json({
      mensagem: 'Médico deletado com sucesso'
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