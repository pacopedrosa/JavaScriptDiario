export class ProductList {
    #products;
    #apiurl;

    constructor(apiurl) {
        this.#apiurl = apiurl;
        this.#products = [];
            // donde renderizar
        this.appContainer = document.getElementById('app');
    }

    //metodo privado para obtener la data

    async #fetchDataProducts() {
        try {
        const response = await fetch(this.#apiurl);
        if(!response.ok){
            throw new Error('Error al conectar con la API');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            throw new Error('error al obtener la data', error);
        }
    }

    async init(){
        try {
            this.#products = await this.#fetchDataProducts();
            this.renderProducts();
        } catch (error) {
            this.renderError("Error al obtener la data")
        }
    }


    renderProducts() {
        if(this.#products.length === 0){
            this.renderError("No hay productos que mostrar");
        }
        const productsHTML = this.#products.map((product, index) =>{
            return `
                <div class="product-card" data-id="${index}">
                <h3>${product.name}</h3>
                <p>Precio: ${product.price}</p>
                <p>Descripcion: ${product.description}</p>
                <p data-id="${index}">Categoria: ${product.category}</p>
                </div>
            `
        }).join("");
        this.appContainer.innerHTML = `
            <div class="product-list">
            ${productsHTML}
            </div>
        `;

        const listaProductos = document.querySelector('.product-list');
        console.log(listaProductos);

        listaProductos.addEventListener('click', (e) => {
            // console.log(e.target.dataset.id);
            // const product = this.#products[e.target.dataset.id];
            // console.log(product);

            if(e.target.dataset.id){
                console.log(e.target.dataset.id);
                console.log(this.#products[e.target.dataset.id]);
                const tarjetaProducto = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
                //Poner de color verde la tarjeta
                if(tarjetaProducto.style.backgroundColor == "green"){
                const tarjetaProducto = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
                tarjetaProducto.style.backgroundColor = "white";
                }else{
                    const tarjetaProducto = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
                    tarjetaProducto.style.backgroundColor = "green";
                }
            }
        });
    }

    renderError(message){
        this.appContainer.innerHTML = `
            <div class="error">
                <p>Error: ${message}</p>
            </div>
        `;
    }


    #validateData(product){
        const { name, price, description, category } = product;
        if(!name ||!price ||!description ||!category){
            return false;
        }
        return true;
    }

    //Getter

    get apiurl(){
        return this.#apiurl;
    }


    //Setter

    set addProduct(product){
        if(this.#validateData(product)){
            // fetch en la api del producto


        }else{
            throw new Error('Error al agregar el producto, los datos son incorrectos');
        }
    }

    // metodo para (post, update, delete, put) productos

    async #opFetchProductData(product, method){
        try{
            switch(method){
                case "post":
                    const responsePost = await fetch(this.#apiurl, 
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(product)
                        }
                    );
                    if(!responsePost.ok){
                        throw new Error('Error al conectar con la API');
                    }
                    const dataPost = await responsePost.json();
                    return dataPost;

                break;
                case "put":
                    const responsePut = await fetch(`${this.#apiurl}/${product.id}`, 
                        {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(product)
                        }
                    );
                    if(!responsePut.ok){
                        throw new Error('Error al conectar con la API');
                    }
                    const dataPut = await responsePut.json();
                    return dataPut;

                break;
                case "delete":
                    const id = product.id
                    const responseDelete = await fetch(`${this.#apiurl}/${id}`, 
                        {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({id})
                        }
                    );
                    if(!responseDelete.ok){
                        throw new Error('Error al conectar con la API');
                    }
                    const dataDelete = await responseDelete.json();
                    return dataDelete;

                break;
                case "patch":
                    const responsePatch = await fetch(`${this.#apiurl}/${product.id}`, 
                        {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(product)
                        }
                    );
                    if(!responsePatch.ok){
                        throw new Error('Error al conectar con la API');
                    }
                    const dataPatch = await responsePatch.json();
                    return dataPatch;

                break;
                case "get":
                        const response = await fetch(this.#apiurl);
                        if(!response.ok){
                            throw new Error('Error al conectar con la API');
                        }
                        const data = await response.json();
                        return data;
                    
                break;
                default:
                    throw new Error("Metodo no valido");
                break;
            }
        } catch (error) {
            throw new Error("Error al fetch")
        }
    }
}