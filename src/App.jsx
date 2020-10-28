import { useState } from 'react';

import './App.css';

const App = () => {

    const [code, setCode] = useState('');
    const [ product, setProduct ] = useState({});
    const [count, setCount] = useState('');
    const [result, setResult] = useState(0);
    const [ total, setTotal ] = useState(0);
    const [list, setList] = useState([]);
    const [bills, setBills] = useState(225);

    const products = [

        {
            code: '10',
            name: 'cafe',
            price: 136,
            weight: 12
        },
        {
            code: '11',
            name: 'arroz',
            price: 200,
            weight: 5
        },
        {
            code: '12',
            name: 'manzana',
            price: 50,
            weight: 0.3
        },

    ]

    function deleteHandler(bills, total){

        setList(list => list.filter((e)=> e.key !== (bills + '') ));

        setTotal(value=>value-total)

    }

    function addHandler(){

        if(!count || !product.price) return false;

        setTotal(total=>total+(product.price*count));

        setBills(count=>++count)

        let year = `${'Año ' + new Date().getFullYear()}`;
        let month = ` ${'Mes ' + new Date().getMonth()}`;
        let day = ` ${'Día ' + new Date().getDate()}`;
        let hours =` ${'Hora ' + new Date().getHours()}`;
        let minutes = `${':' + new Date().getMinutes()}`
        let seconds = `${':' + new Date().getSeconds()}`;

        let time = year + month + day + hours + minutes + seconds;

        setList(list =>

            [
                ...list,         
                <div className="bill" key={bills}>
                    <p>Cantidad: {count} de {product.name}</p>
                    <p>Precio: {product.price} Bs.</p>
                    <p>Fecha: { time }</p>
                    <p>Total: {(product.price * count) + (((product.price * count)*16)/100)} Bs.</p>
                    <button onClick={()=>{deleteHandler(bills, product.price * count)}}>Eliminar</button>
                </div>
            ]

        )

    }

    function codeHandler(code){

        const value = code.target.value;

        if(isNaN(value)) return false;

        setCode(value);

        const result = products.find(product=>product.code === value);

        if(!result){
            
            setResult(0);
            setProduct({})
        }
            else {
            
                setResult(result.price)
            
                setProduct(result);
            
            }

    }

    function countHandler(count){

        const value = count.target.value;

        if(isNaN(value)) return false;

        setCount(value)

        if(product.price) setResult(product.price*value)

    }

    return (
        <>
            <section  className="calculator">

                <div className="main-input">
            
                    <input type="text" placeholder="Código" value={code} onChange={codeHandler}/>
                    <input  type="text" placeholder="Cantidad: 1" value={count} onChange={countHandler}/>
            
                    <div className="result">
            
                        <p>Resultado:</p>
            
                        <p>{result} Bs.</p>

                    </div>
            
                    <button onClick={addHandler} >Añadir</button>
            
                </div>

                <div className="product">

                    <h2>Producto/s</h2>

    <div className="container"><p className="Name">Nombre</p> <p className="value">{product.name}</p></div>
    <div className="container"><p className="price">Precio</p> <p className="value">{product.price}</p></div>

                </div>

                <div className="history">
            
                    <h2>Historial</h2>

                <div className="view">{list}</div>
            
                </div>

            </section>

            <section className="pay">

                <input type="text" placeholder="Cedula" className="card"/>
                <input type="text" placeholder="Clave" className="key"/>


    <div className="total">
        
        <h2 className="title">Sub Total:</h2>
        <p className="result">{total} Bs.</p>
        <h2 className="title">Total (+IVA 16%):</h2>
        <p className="result">{total + ((total*16)/100)} Bs.</p>
        
    </div>

            </section>
        </>

    );
}

export default App;