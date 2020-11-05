import { useState, useEffect } from 'react';

import './product-manager.css';

function ProductItem({ product: PRODUCT , setProducts, products, code: CODE }){

    const [product, setProduct] = useState({...PRODUCT, code: CODE});
    const [edit, setEdit] = useState(true);
    const [activateModal, setActivateModal] = useState(false)
    const [oldProduct, setOldProduct] = useState(PRODUCT);

    const editHandler = () => setEdit(value=>!value);

    // La primera vez que se agrega un elemento viene con los campos
    // vacíos así que se activa el modo editar. El campo a comprar es
    // arbitrario. Ya todos vienen vacíos.
    useEffect(()=>{

        if(!PRODUCT.name) setEdit(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateHandler = ({code, name, price, count}) => {

        editHandler();

        setProducts(products => new Map(products.set(code, { name, price, count})) );

    }

    const applyHandler = () => {

        for(let field in product) if(!product[field]) return false;

        if((product.code || CODE) !== CODE){

            if(products.has(product.code || CODE)) return false;

        }

        setOldProduct({code: CODE, ...PRODUCT})

        updateHandler({code: CODE, ...product});

    }

    const cancelHandler = ()=>{

        editHandler();

        setProduct({code: CODE, ...PRODUCT})

    }

    function revertHandler(){

        setProduct({code: CODE, ...oldProduct})

        updateHandler({code: CODE, ...oldProduct})

    }

    const removeHandler = ()=>{

        setActivateModal(true)

    }

    function yesOrNoDelete(condition){

        if(condition){

            setProducts(products=>{

                products.delete(CODE)
    
                return new Map(products)
    
            });

            setActivateModal(false)

        }else setActivateModal(false)

    }

    const inputChanges = (element, field) => {
    
        const value = element.target.value;

        if(/\D/.test(value)) return;
        if(value[0] === '0' && value[1] === '0') return;
        setProduct({...product, [field]:value});

    }
    const inputCodeChanges = (element, field) => {
    
        const value = element.target.value;

        if(/\D/.test(value)) return;
        
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

        }else if(e.key === 'Escape') cancelHandler()

    }

    return(
    <div className="product-item" onKeyDown={keysControl} tabIndex={1}>

        <div className="modal" style={{display:activateModal?'flex':'none'}}>

            <button onClick={()=>yesOrNoDelete(true)}>Sí, quiero eliminar</button>
            <button onClick={()=>yesOrNoDelete(false)}>No quiero eliminar</button>

        </div>

        <input type="text"
            disabled={edit} 
            value={product.code}
            onChange={e=>inputCodeChanges(e,'code')}
            className="code"
            />

        <input type="text"
            disabled={edit} 
            value={product.name} 
            onChange={e=>inputStringChanges(e,'name')} />


        <input type="text"
            disabled={edit} 
            value={product.price + (edit?' Bs.':'')} 
            onChange={e=>inputChanges(e,'price')}/>


        <input type="text"
            disabled={edit} 
            value={product.count} 
            onChange={e=>inputChanges(e,'count')}/>

        <button className="edit" onClick={editHandler} hidden={!edit}>Editar</button>
        <div className="edit-data" style={{ display: edit?'none':'grid' }}>
            <button onClick={applyHandler}>Aplicar</button>
            <button onClick={revertHandler}>Revertir</button>
            <button onClick={cancelHandler} className="cancel">Cancelar</button>
        </div>
        <button className="delete" onClick={removeHandler}>
            <div className="trash"></div>
            Eliminar
        </button>

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

        setProducts(products=>new Map([[code, {name:'', price:'', count:''}], ...products]));
        setViewProducts(products=>new Map([[code, {name:'', price:'', count:''}], ...products]))

    }

    async function searchHandler(event){

        setTimeout(()=>{

            const input = event.target.value;

            const isNumber = !isNaN(input)

            if(!input) return setViewProducts(()=> products);

            setViewProducts(()=>{

                return new Map([...products].map( data =>{

                    const [index, value] = data;

                    let result;

                    if(isNumber){

                        result = index.match(new RegExp(input,'i'));

                    }else result = value.name.match(new RegExp(input,'i'));

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

    const [activateByName, setActivateByName] = useState(true)

    function OrderByName(){

        setActivateByName(value=>!value)

        setViewProducts(products=>{

            return new Map([...products].sort(([,dataA], [,dataB]) => {

                if(activateByName)return dataA.name.localeCompare(dataB.name)
                    else return dataB.name.localeCompare(dataA.name)

            }))

        })

    }

    const [activateByPrice, setActivateByPrice] = useState(true)

    function OrderByPrice(){

        setActivateByPrice(value=>!value)

        setViewProducts(products=>{

            return new Map([...products].sort(([,dataA], [,dataB]) => {

                if(activateByPrice) return (dataA.price > dataB.price)?-1:1
                    else return (dataA.price < dataB.price)?-1:1

            }))

        })
    }

    const [activateByCount, setActivateByCount] = useState(true)

    function OrderByCount(){

        setActivateByCount(value=>!value)

        setViewProducts(products=>{

            return new Map([...products].sort(([,dataA], [,dataB]) => {

                if(activateByCount) return (dataA.count > dataB.count)?-1:1
                    else return (dataA.count < dataB.count)?-1:1

            }))

        })

    }

    if(zone !== 1) return false;

    return (

        <div className="product-manager-container">
            <div className="main-control">
                <div className="input-container">
                    <div className="lupa"></div>
                    <input type="text" placeholder="Buscar por Nombre o Código..." onKeyDown={searchHandler} />
                </div>
                <button onClick={addHandler}>
                    <div className="plus"></div>
                    Agregar un Producto
                </button>
            </div>
            <main>
                
                <div className="order-bar">

                    <p>Código</p>
                    <p onClick={OrderByName}>Nombre {activateByName?'▼':'▲'} </p>
                    <p onClick={OrderByPrice}>Precio {activateByPrice?'▼':'▲'} </p>
                    <p onClick={OrderByCount}>Cantidad {activateByCount?'▼':'▲'} </p>

                </div>
                <div className="list-items">
                {

                    [...viewProducts].map(([index,value])=><ProductItem product={value} setProducts={updateHandler} products={viewProducts} key={index} code={index} />)

                }
                </div>
            </main>
        </div>

    );

}

export default ProductManager;