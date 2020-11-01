import { useState } from 'react';

import './product-manager.css';

function ProductItem({ product: PRODUCT , setProducts, products }){

    const [product, setProduct] = useState({...PRODUCT});
    const [edit, setEdit] = useState(true);

    const editHandler = () => setEdit(value=>!value);

    const updateHandler = value => {

        editHandler();

        setProducts(products => products.map( e=>{

                if(e.code === PRODUCT.code) return value;
                    else return e

            })

        );

    }

    const applyHandler = () => {

        for(let field in product) if(!product[field]) return false;

        if(product.code !== PRODUCT.code){

            if(products.find(e=>e.code === product.code)) return false
        
        }

        updateHandler(product);

    }

    const revertHandler = ()=>{

        editHandler();

        setProduct({...PRODUCT})

    }

    const removeHandler = ()=>{

        setProducts(products=>{

            const CODE = edit? PRODUCT.code: product.code;

            return products.filter(e=>e.code !== CODE);

        });

    }
    const inputChanges = (element, field) => {
    
        const value = element.target.value;

        if(isNaN(value)) return false;

        setProduct({...product, [field]:value});

    }
    const inputStringChanges = (element, field) => {
    
        const value = element.target.value;

        if(/\d/.test(value)) return false;

        setProduct({...product,[field]:value});

    }

    return(
    <div className="product-item">
        <div className="data">
            <label>Código:</label>
            <input type="text"
                disabled={edit} 
                value={product.code}
                onChange={e=>inputChanges(e,'code')} />
            <label>Nombre:</label> 
            <input type="text"
                disabled={edit} 
                value={product.name} 
                onChange={e=>inputStringChanges(e,'name')} />
            <label>Precio:</label> 
            <input type="text"
                disabled={edit} 
                value={product.price} 
                onChange={e=>inputChanges(e,'price')}/>
        </div>
        <div className="control">

            <button className="edit" onClick={editHandler} hidden={!edit}>Editar</button>
            <div className="edit-data" style={{ display: edit?'none':'grid' }}>
                <button onClick={applyHandler}>Aplicar</button>
                <button onClick={revertHandler}>Revertir</button>
            </div>
            <button className="delete" onClick={removeHandler}>Eliminar</button>

        </div>
    </div>
    )
}

function ProductManager ({ zone, products, setProducts }){

    const [viewProducts, setViewProducts] = useState(products);
    
    if(zone !== 1) return false;

    function codeGenerated(){

        return [1,1,1].map(e=>Math.floor(Math.random()*10)).join``;

    }

    function voidInputHandler(event){

        setTimeout(() => {

            if(!event.target.value && viewProducts !== products)

            setViewProducts(()=>products);

            console.log();

        }, 0);

    }

    function addHandler(){

        let code = codeGenerated();

        // eslint-disable-next-line no-loop-func
        while(products.some(e=> e.code === code)){

            code = codeGenerated()

        }

        setProducts(products=>[{ code, name:'', price:'' },...products])

    }

    function searchHandler(event){

        setTimeout(()=>{

            const value = event.target.value;

            setViewProducts(currentProducts=>{
    
                const products = currentProducts.map(e=>{
    
                    let result = e.name.match(value);
    
                    if(result) result.data = e;
    
                    return result;
    
                }).filter(e=>e);
    
                products.sort((productA,productB)=>{
    
                    return productB.length[0] - productA.length[0];
    
                })
    
                products.sort((productA,productB)=>{
    
                    return productA.index - productB.index;
    
                })
    
                return products.map(e=>e.data);
    
            });

        });

    }

    return (

        <div className="product-manager-container">
            <div className="main-control">
                <input type="text" placeholder="Buscar..." onKeyDown={searchHandler}/>
                <button onClick={addHandler}>Agregar un Producto</button>
            </div>
            <main>{viewProducts.map(e=><ProductItem product={e} setProducts={setProducts} products={products} key={e.code} />)}</main>
        </div>

    );

}

export default ProductManager;