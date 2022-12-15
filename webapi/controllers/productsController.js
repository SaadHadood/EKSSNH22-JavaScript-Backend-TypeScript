const express = require('express')
const controller = express.Router()

const productSchema = require('../schemas/productSchema')

// unsecured routes - oskyddat 
controller.route('/').get(async (req, res) => {
    const products = []
    const list = await productSchema.find()
    if(list) {
        for(let product of list) {
            products.push({
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.category,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/:tag').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag })
    if(list) {
        for(let product of list) {
            products.push({
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.category,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()
})

controller.route('/:tag/:take').get(async (req, res) => {
    const products = []
    const list = await productSchema.find({ tag: req.params.tag }).limit(req.params.take)
    if(list) {
        for(let product of list) {
            products.push({
                id: product._id,
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                tag: product.category,
                imageName: product.imageName,
                rating: product.rating
            })
        }
        res.status(200).json(products)
    } else
        res.status(400).json()

})

controller.route('/product/details/:articleNumber').get(async (req, res) => {
    const product = await productSchema.findById(req.params.articleNumber)
    if(product) {
        res.status(200).json({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            tag: product.category,
            imageName: product.imageName,
            rating: product.rating
        })
    } else
        res.status(404).json()
})

// secured routes - skyddat 
controller.route('/').post (async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body

    if (!name || !price)
        res.status(400).json({text: 'name and price is required.'})

    const item_exists = await productSchema.findOne({name}) //kontrollear om namnet finns redan.
    if (item_exists)
        res.status(409).json({text: 'a product with the same name already exists.'})
    else { //annars skapa product.
        const product = await productSchema.create({
            name,
            description,
            price,
            category,
            tag,
            imageName,
            rating
        })
        if (product)
            res.status(201).json(product)
        else
            res.status(400).json({text: 'something went wrong when we tried to create the product.'})
    }

})

controller.route('/:articleNumber').delete (async (req, res) => {
    if(!req.params.articleNumber)
        res.status(400).json('no article number was spcificed.')
    else {
        const item = await productSchema.findById(req.params.articleNumber)
        if (item){
            await productSchema.remove(item)
            res.status(200).json({text: `product with article number ${req.params.articleNumber} was deleted successfully.`})
        } else {
            res.status(404).json({text: `product with article number ${req.params.articleNumber} was not found.`})
        }
    }
})


/* controller.route('/:articleNumber').put (async (req, res) => {
    const { name, description, price, category, tag, imageName, rating } = req.body
    const updatedProduct = ({articleNumber, name, description, price, category, tag, imageName, rating })
    
    const updatedProduct = await productSchema.findByIdAndUpdate(req.params.articleNumber, updatedProduct, {new: true})

    const productExist = await productSchema.findById(req.params.articleNumber)
    if (productExist) {
        const updateProduct = await productSchema.updateOne({ _id: req.params.articleNumber}, updatedProduct)
        if (updateProduct)
            res.status(200).json({text: `product ${name} with articlenumber ${articleNumber} was updated`})
        else
            res.status(400).json({text: 'somthing went wrong when we tried to update the product'})
    }
    return (updatedProduct)

})  */



controller.put('/:articleNumber', async (req, res) => {
    const id = req.params.articleNumber
    const updates =
    {
        name: req.body.name,
        tag: req.body.tag,
        category: req.body.category,
        imageName: req.body.imageName
    }

    const options = {new: true}
    
    const product = await productSchema.findByIdAndUpdate(id, updates, options)

    if(product)
        res.status(200).json(product)
    else
    res.status(404).json({text: "hello"})
} )


module.exports = controller