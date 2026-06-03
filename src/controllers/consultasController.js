const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  try {
    const consultas = await prisma.consulta.findMany({
      include: {
        paciente: true,
        medico: true,
        usuario: true
      }
    })
    res.json(consultas)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const buscarPorId = async (req, res) => {
  try {
    const consulta = await prisma.consulta.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        paciente: true,
        medico: true,
        usuario: true
      }
    })
    res.json(consulta)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const criar = async (req, res) => {
  try {
    const {
      dataConsulta,
      observacao,
      status,
      valor,
      pacienteId,
      medicoId,
      usuarioId
    } = req.body
    const consulta = await prisma.consulta.create({
      data: {
        dataConsulta,
        observacao,
        status,
        valor,
        pacienteId,
        medicoId,
        usuarioId
      }
    })
    res.status(201).json(consulta)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const atualizar = async (req, res) => {
  try {
    const {
      dataConsulta,
      observacao,
      status,
      valor,
      pacienteId,
      medicoId,
      usuarioId
    } = req.body
    const consulta = await prisma.consulta.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        dataConsulta,
        observacao,
        status,
        valor,
        pacienteId,
        medicoId,
        usuarioId
      }
    })
    res.json(consulta)
  } catch (error) {
    res.status(500).json({
      erro: error.message
    })
  }
}
const deletar = async (req, res) => {
  try {
    await prisma.consulta.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.json({
      mensagem: 'Consulta deletada com sucesso'
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