const { ResponseTemplate } = require('../helper/template.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function TestUser(req, res) {
    let resp = ResponseTemplate(null, 'success', null, 200)
    res.json(resp)
}

async function Insert(req, res) {
    const { name, email, address } = req.body
    const payload = {
        name,
        address,
        email
    }

    try {

        const user = await prisma.user.create({
            data: payload
        })

        let resp = ResponseTemplate(user, 'success', null, 200)
        res.json(resp)
        return
    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return
    }
}

async function Get(req, res) {

    const { name, email } = req.query
    const payload = {}

    if (name) {
        payload.name = name
    }

    if (email) {
        payload.email = email
    }

    try {
        const users = await prisma.user.findMany({
            where: payload,
            include: {
                post: {
                    where: {
                        title: 'Pemilu Seru Habis'
                    }
                }
            }

        })
        let resp = ResponseTemplate(users, 'success', null, 200)
        res.json(resp)
        return
    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return
    }

}

async function GetByPK(req, res) {

    const { id } = req.params

    try {
        const users = await prisma.user.findUnique({
            where: {
                id: Number(id)
            },
        })
        let resp = ResponseTemplate(users, 'success', null, 200)
        res.json(resp)
        return
    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', error, 500)
        res.json(resp)
        return
    }
}

async function Update(req, res) {

    const { name, email, address } = req.body
    const { id } = req.params

    const payload = {}

    if (!name && !email && !address) {
        let resp = ResponseTemplate(null, 'bad request', null, 400)
        res.json(resp)
        return
    }

    if (name) {
        payload.name = name
    }

    if (email) {
        payload.email = email
    }

    if (address) {
        payload.address = address
    }

    try {
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: payload
        })

        let resp = ResponseTemplate(user, 'success', null, 200)
        res.json(resp)
        return
    }
    catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', null, 500)
        res.json(resp)
        return
    }
}

async function Delete(res, req) {

    const { id } = req.params

    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })

        let resp = ResponseTemplate(null, 'success', null, 200)
        res.json(resp)
        return
    } catch (error) {
        let resp = ResponseTemplate(null, 'internal server error', null, 500)
        res.json(resp)
        return
    }
}



module.exports = {
    TestUser,
    Insert,
    Get,
    GetByPK,
    Update,
    Delete
}