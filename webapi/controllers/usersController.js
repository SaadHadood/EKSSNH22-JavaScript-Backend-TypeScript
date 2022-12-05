const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database')


controller.param("id", (req, res, next, id) => {
    req.user = users.find(user => user.id == id)
    next()
})



// http://localhost:5000/api/users
controller.route('/')
.post((httpRequest, httpResponse) => {
    let user = {
        id: (users [users.length -1])?.id > 0 ? (users [users.length -1])?.id + 1 : 1,
        category: httpRequest.body.category,
        title: httpRequest.body.title,
        image: httpRequest.body.image,
        description: httpRequest.body.description,
        price: httpRequest.body.price,
    }

    users.push(user)
    httpResponse.status(201).json(user)
})



// http://localhost:5000/api/users/1
controller.route("/:id")
.get((httpRequest, httpResponse) => {
    if (httpRequest.user != undefined )
        httpResponse.status(200).json(httpRequest.user)
        else
            httpResponse.status(404).json()
})

.put((httpRequest, httpResponse) => {
    if (httpRequest.user != undefined ) {
        users.forEach(user => {
            if (user.id == httpRequest.user.id) {
            user.category = httpRequest.body.category ? httpRequest.body.category : user.category
            user.title = httpRequest.body.title ? httpRequest.body.title : user.title
            user.image = httpRequest.body.image ? httpRequest.body.image : user.image
            user.description = httpRequest.body.description ? httpRequest.body.description : user.description
            user.price = httpRequest.body.price ? httpRequest.body.price : user.price

            }
        })
        httpResponse.status(200).json(httpRequest.user)
    }
    
        else
            httpResponse.status(404).json()
})
.delete((httpRequest, httpResponse) => {
    if (httpRequest.user != undefined ) {
        users = users.filter(user => user.id !== httpRequest.user.id)
        httpResponse.status(204).json()
    }
        else
            httpResponse.status(404).json()
})





controller.param("id", (reg, res, next, id) => {
    reg.user = users.find(x => x.id == id)
    next()
})

controller.param("tag", (req, res, next, tag) => {
    req.users = users.filter(x => x.tag == tag)
    next()
})

controller.route('/details/:articleNumber').get((reg, res) => {
    if(reg.user != undefined)
        res.status(200).json(reg.user)
    else
        res.status(404).json()
})

controller.route('/:tag').get((req, res) => {
    if(req.users != undefined)
        res.status(200).json(req.users)
    else
        res.status(404).json()
})

controller.route('/:tag/:take').get((req, res) => {
    let list = []

    for (let i =0; i < Number(req.params.take); i++)
        list.push(req.users[i])
    
    res.status(200).json(list)
})

controller.route('/').get((req, res) => {
    res.status(200).json(users)
})

module.exports = controller