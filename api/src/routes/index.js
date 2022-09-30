const { Router } = require('express');
const {Products} = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.post("/product", async (req,res)=>{
    const {name,price,color, images,description,stock,category} = req.body
    try {
        if (!name || !price || !category ) return res.status(404).json({message: "error al cargar la información"})
        // if(name |price,images,description,stock,category)
        const newProduct = await Products.create({...req.body})
        return res.json(newProduct);
    } catch (error) {
        res.send(error)
    }
})

router.get("/product", async (req,res)=>{
    // const {name} = req.body
    try {
        const products = await Products.findAll()
        res.send(products)
    } catch (error) {
        res.send(error)
    }
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
