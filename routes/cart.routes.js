const { Router } = require("express");
const CartManager = require("../classes/cart-manager");

const router = Router();

const cm = new CartManager();


router.post('/carts', async (req, res) => {

    
    await cm.createCart();
   

    return res.json({
        mensaje: 'Carro creado'
    })
});




module.exports = router;