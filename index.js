const express = require('express');
const productosRutas = require('./routes/product.routes')
const carritoRutas = require('./routes/cart.routes')


const app = express();
const port = 8080;

app.use(express.json());

app.use(productosRutas)
app.use(carritoRutas)


app.listen(port, () => {

    console.log("servidor arriba puerto:", port);

})
