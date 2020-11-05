import { useRef, useState } from 'react';

import './bills-manager.css';

function BillsManager({zone, products, setProducts}){

    const [code, setCode] = useState('');
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);
    const [bills, setBills] = useState(225);
    const [alertCount, setAlertCount] = useState(false)
    const [product, setProduct] = useState({code:'', name:'', price: ''});

    const { name: NAME, price: PRICE } = product;
    // Current Product
    const SUBTOTAL = PRICE * count;
    const TOTAL = SUBTOTAL + ((SUBTOTAL*16)/100);

    function deleteHandler(bills, total){

        setList(list => list.filter((e)=> e.key !== (bills + '') ));

        setTotal(value=>value-total)

    }

    function updateCount(value){

        setProducts(products => {

            return new Map(products.set(code, {...product, count: value}))

        });

        setProduct({...product, count: value})

    }

    function revertHandler(value, index){
        
        setAlertCount(false);

        setProduct(product=>({...product, count: product.count + +value}))

        setProducts(products => {

            return new Map(products.set(code, products.get(index).count + +value));

        });

    }

    function addHandler(){

        if(!count || !PRICE) return false;

        if(count > product.count){

            setAlertCount(true);

            return false;

        }

        const countResult = product.count - count

        updateCount(countResult)

        setTotal(total=>total+SUBTOTAL);

        setBills(count=>++count)

        let year = `${new Date().getFullYear()}`;
        let month = `/${new Date().getMonth()}`;
        let day = `/${new Date().getDate()}`;
        let hours =` ${'Hora: ' + new Date().getHours()}`;
        let minutes = `${':' + new Date().getMinutes()}`
        let seconds = `${':' + new Date().getSeconds()}`;

        let time = year + month + day + hours + minutes + seconds;

        setList(list =>

            [
                <div className="bill" key={bills} onClick={()=>revertHandler(count, product.code)}>
                    <p>{count} {NAME} a {PRICE} Bs. Total: {TOTAL} Bs.</p>
                    <p>Fecha: {time}</p>
                    <button onClick={()=>{deleteHandler(bills, SUBTOTAL)}}>Eliminar</button>
                </div>,
                ...list
            ]

        )

    }

    function codeHandler(element){

        const value = element.target.value;

        if(isNaN(value)) return false;

        setCode(value);

        if(products.has(value)) setProduct({code:value, ...products.get(value)}); 
            else setProduct({code:'', name:'', price: ''});

    }

    function countHandler(count){

        setTimeout(()=>{

            const value = count.target.value;
    
            if(isNaN(value)) return false;
    
            if(value)setCount(value)
                else setCount(1)

        }, 0)

    }

    if(zone !== 2) return false;

    return (
        <div className="bills-manager-container">
            <section  className="calculator">

                <div className="main-input">
            
                    <input type="text" placeholder="Código" value={code} onChange={codeHandler}/>
                    <input type="text" placeholder="Cantidad: 1" onKeyDown={countHandler}/>
            
                    <div className="result">

                    <div className="modal" style={{display:alertCount?'flex':'none'}} onClick={()=>setAlertCount(false)}>

                        <div className="cross"></div>

                        <p hidden={product.count !== 0}>PRODUCTO AGOTADO</p>

                        <p hidden={product.count === 0}>Solo hay en existencia:</p>
                        <p hidden={product.count === 0}>{product.count}</p>

                    </div>
            
                        <p>Resultado:</p>
            
                        <p>{TOTAL} Bs.</p>

                    </div>
            
                    <button onClick={addHandler}>Añadir</button>
            
                </div>

                <div className="product">

                    <h2>Producto/s</h2>

                    <div className="container"> Nombre <br/> <p className="value">{NAME}</p></div>
                    <div className="container"> Precio <br/> <p className="value">{PRICE}</p></div>

                </div>

                <div className="history">
            
                    <h2>Historial</h2>

                    <div className="view">{list}</div>
            
                </div>

            </section>

            <section className="pay">

                <input type="text" placeholder="Cedula" className="card"/>
                <input type="text" placeholder="Nombre" className="key"/>

                <div className="total">
                    
                    <h2 className="title">Sub Total<br/>{total} Bs.</h2>
                    <h2 className="title">Total (+IVA 16%)<br/>{total + ((total*16)/100)} Bs.</h2>
                    
                </div>

            </section>
        </div>

    );

}

export default BillsManager;