class ProductManager {

    constructor() {
        this.productos = []
    }

    getProducts() {
        return this.productos
    }

    addproducts(title, description, price, thumbnail, code, stock) {
        const producto_id = this.productos.length+1
        const producto = {
            id: producto_id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // si exixte no lo agrega
        if(this.validarProducto(code)){

        }
        //si noo existe lo agrega
        this.productos.push(producto)

    }
 
    validarProducto(producto_id){
        const encontrado_id = this.productos.find((producto) => producto.id === producto_id)
        if(encontrado_id){
            console.log("Error el producto ya existe")
            return true
        } 
    }
 
}

const pm = new ProductManager();
console.log(pm.getProducts());
pm.addproducts("pr1", "desc1",12000,"no1","code1",10);
console.log(pm.getProducts());

