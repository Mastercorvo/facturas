import { useState } from 'react';

import './product-manager.css';

function ProductItem({ product: PRODUCT , setProducts, products, code: CODE }){

    const [product, setProduct] = useState({...PRODUCT});
    const [edit, setEdit] = useState(true);

    const editHandler = () => setEdit(value=>!value);

    const updateHandler = ({code, name, price}) => {

        editHandler();

        setProducts(products => new Map(products.set(code, { name, price })) );

    }

    const applyHandler = () => {

        for(let field in product) if(!product[field]) return false;

        if((product.code || CODE) !== CODE){

            if(products.has(product.code || CODE)) return false;
        
        }

        updateHandler({code: CODE, ...product});

    }

    const revertHandler = ()=>{

        editHandler();

        setProduct({...PRODUCT})

    }

    const removeHandler = ()=>{

        setProducts(products=>{

            products.delete(CODE)

            return new Map(products)

        });

    }
    const inputChanges = (element, field) => {
    
        const value = element.target.value;

        if(isNaN(value)) return false;

        setProduct({...product, [field]:value});

    }
    const inputStringChanges = (element, field) => {
    
        const value = element.target.value;

        setProduct({...product,[field]:value});

    }

    function keysControl(e){

        if(edit) return false

        if(e.key === 'Enter'){

            applyHandler()

        }else if(e.key === 'Escape') revertHandler()

    }

    return(
    <div className="product-item" onKeyDown={keysControl} tabIndex={1}>
        <div className="data">
            <label>Código:</label>
            <input type="text"
                disabled={edit} 
                value={product.code || CODE}
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

    function codeGenerated(){

        return Math.floor(Math.random()*1000) + '';

    }

    function addHandler(){

        let code = codeGenerated();

        // eslint-disable-next-line no-loop-func
        while(products.has(code)){

            code = codeGenerated()

        }

        setProducts(products=>new Map([[code, {name:'', price:''}], ...products]));
        setViewProducts(products=>new Map([[code, {name:'', price:''}], ...products]))

    }

    async function searchHandler(event){

        setTimeout(()=>{

            const input = event.target.value;

            if(!input) return setViewProducts(()=> products);

            setViewProducts(()=>{

                return new Map([...products].map( data =>{

                    const [, value] = data;

                    let result = value.name.match(new RegExp(input,'i'));

                    if(result) result.data = data;
                        // En el primer sort la Destructuring genera error por que falta
                        // Un elemento en el indice 0 con la propiedad length
                        else if(!Object.values(value).every(e=>e)){

                            result = ['']
                            result.data = data

                        } 
                    
                    return result;

                })
                .filter(e=>e)
                .sort(([productA],[productB])=> productB.length - productA.length)
                .sort((productA, productB)=> productA.index - productB.index)
                .sort(({data: dataA},{data: dataB}) => {

                    const resultA = +!Object.values(dataA[1]).every(e=>e)
                    const resultB = +!Object.values(dataB[1]).every(e=>e)

                    if(resultA === resultB) return 0

                    if(resultA === 1) return -1

                    return 1

                })
                .map(e=>e.data))
    
            });

        }, 0);

    }

    function updateHandler(value){

        setProducts(value);
        setViewProducts(value)

    }

    if(zone !== 1) return false;

    return (

        <div className="product-manager-container">
            <div className="main-control">
                <input type="text" placeholder="Buscar..." onKeyDown={searchHandler}/>
                <button onClick={addHandler}>Agregar un Producto</button>
            </div>
            <main>{

                [...viewProducts].map(([index,value])=><ProductItem product={value} setProducts={updateHandler} products={viewProducts} key={index} code={index} />)

            }</main>
        </div>

    );

}

export default ProductManager;