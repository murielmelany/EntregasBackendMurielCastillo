const express = require('express');
const ProductManager = require('./classes/product-manager');

const app = express();
const port = 8080;

const pm = new ProductManager();

console.log("hola mundo desde tom")

app.get("/products", async (req, res) => {

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

app.get("/products/:id", async (req, res) => {


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


app.listen(port, () => {

    console.log("servidor arriba puerto:", port);

})
