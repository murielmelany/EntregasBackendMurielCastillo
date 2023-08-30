const fs = require('fs')

// para que funcione el programa se tiene que crear el archivo inventario.json
// en la misma carpeta que el index.js sino solo habria que agregar un producto
// como primer paso para que se genere el json

class ProductManager {

    constructor() {
        this.path = "./inventario.json"
    }

    async getProducts() {
        
        const file = await fs.promises.readFile(this.path);
        if(file !== undefined) {
            return JSON.parse(file)
        } else {
            return []
        }

    }

    async addproducts(title, description, price, thumbnail, code, stock) {
        const producto_id = this.generarID();
        const producto = {
            id: producto_id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        const products = await this.getProducts();

        const existeElProducto = await this.validarProducto(code)
        //si exixte no lo agrega
        if (existeElProducto) {
            console.log("El producto ya esta en el inventario")
        } else {
            products.push(producto)
            //si noo existe lo agrega
            await fs.promises.writeFile(this.path, JSON.stringify(products));
        }
       
    }

    async validarProducto(code) {
        const lista = await this.getProducts();

        const buscamosProducto = lista.find((producto) => producto.code === code)
        if (buscamosProducto) {
            return true
        }
    }

    async getProductById(id) {
        const lista = await this.getProducts();
        const buscamosPorId = lista.find((producto) => producto.id === id)
        if (buscamosPorId) {
            console.log(buscamosPorId);
        } else {
            console.log("Producto no encontrado")
        }
    }

    async updateProduct(id,title, description, price, thumbnail, code, stock) {
        const lista = await this.getProducts();
        const buscamosPorId = lista.find((producto) => producto.id === id)
        if (buscamosPorId) {
            
            const productoActualizado = {
                id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            const listaFiltrada = lista.filter((prod) => prod.id !== id);
            await fs.promises.writeFile(this.path, JSON.stringify([...listaFiltrada, productoActualizado]));
            console.log('Producto actualizado')


        } else {
            console.log("Producto no encontrado")
        }
    }

    async deleteProduct(id){
        const lista = await this.getProducts();
        const buscamosPorId = lista.find((producto) => producto.id === id)
        if(buscamosPorId){
            const listaFiltrada = lista.filter((prod) => prod.id !== id);
            await fs.promises.writeFile(this.path, JSON.stringify(listaFiltrada))
        } else {
            console.log("El producto no existe")
        }
       
    }

    generarID() {
        const timestamp = Date.now();
        const numeroAleatorio = Math.floor(Math.random() * 1232354);
        return `${timestamp}${numeroAleatorio}`;
    }

}

const exec = async () => {
    const pm = new ProductManager();
    // aqui poner la ejecucion de los metodos de la clase para que sea todo asincrono


}


exec();

