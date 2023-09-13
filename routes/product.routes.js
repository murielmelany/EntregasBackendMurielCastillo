const { Router } = require("express");
const ProductManager = require("../classes/product-manager");

const router = Router();

const pm = new ProductManager();

router.get("/products", async (req, res) => {

    const products = await pm.getProducts();

    if (req.query.limit) {
        return res.json({
            product: products.slice(0, req.query.limit)
        })

    } else {
        return res.json({
            products
        });
    }

});

router.get("/products/:id", async (req, res) => {


    const producto = await  pm.getProductById(req.params.id);



    if(producto){
        return res.json({
            producto
        })
       
    } else {
        return res.status(404).json({
            mensaje:"Producto no encontrado"
        })
    }


});

module.exports = router