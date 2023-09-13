const fs = require('fs').promises;

class CartManager {
    constructor() {
        this.path = "./cart.json";
    }

    async createCart() {
        const carritoVacio = {
            id: this.generarID(),
            products: []
        };
        try {
            await fs.writeFile(this.path, JSON.stringify(carritoVacio, null, 2));
            console.log("Archivo creado con éxito");
        } catch (e) {
            console.error("Error al escribir el archivo:", e);
        }
    }

    generarID() {
        const timestamp = Date.now();
        const numeroAleatorio = Math.floor(Math.random() * 1232354);
        return `${timestamp}${numeroAleatorio}`;
    }
}

module.exports = CartManager;
