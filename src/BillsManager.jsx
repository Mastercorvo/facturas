import { useState } from 'react';

import './bills-manager.css';

function BillsManager({zone, products}){

    const [code, setCode] = useState('');
    const [count, setCount] = useState('');
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);
    const [bills, setBills] = useState(225);
    const [product, setProduct] = useState({code:'', name:'', price: ''});

    const { name: NAME, price: PRICE } = product;
    // Current Product
    const SUBTOTAL = PRICE * count;
    const TOTAL = SUBTOTAL + ((SUBTOTAL*16)/100);

    function deleteHandler(bills, total){

        setList(list => list.filter((e)=> e.key !== (bills + '') ));

        setTotal(value=>value-total)

    }

    function addHandler(){

        if(!count || !PRICE) return false;

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
                ...list,         
                <div className="bill" key={bills}>
                    <p>{count} {NAME} a {PRICE} Bs. Total: {TOTAL} Bs.</p>
                    <p>Fecha: {time}</p>
                    <button onClick={()=>{deleteHandler(bills, SUBTOTAL)}}>Eliminar</button>
                </div>
            ]

        )

    }

    function codeHandler(element){

        const value = element.target.value;

        if(isNaN(value)) return false;

        setCode(value);

        const result = products.find(({code})=>code === value);

        if(result) setProduct(result); 
            else setProduct({code:'', name:'', price: ''});

    }

    function countHandler(count){

        const value = count.target.value;

        if(isNaN(value)) return false;

        setCount(value)

    }

    if(zone !== 2) return false;

    return (
        <div className="bills-manager-container">
            <section  className="calculator">

                <div className="main-input">
            
                    <input type="text" placeholder="Código" value={code} onChange={codeHandler}/>
                    <input type="text" placeholder="Cantidad: 1" value={count} onChange={countHandler}/>
            
                    <div className="result">
            
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