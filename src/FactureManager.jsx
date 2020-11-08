import { useEffect, useState } from 'react';
import './facture-manager.css';
import Bill from './bill';

function BillsListItem({revertHandler, product, setList, count}){

    function deleteHandler(){

        setList(list => {

            list.delete(product.name)

            return new Map(list);
        
        });

        revertHandler(count, product.code)

    }

    return (

        <div className="bill-history-Item" key={product.name} >
            <p>{count} {product.name} a {product.price} Bs. Total: {count * product.price} Bs.</p>
            <button onClick={()=>{deleteHandler()}}>Eliminar</button>
        </div>

    )

}

function FactureManager({zone, products, setProducts, setBills, setBillsHistoryCount, billHistoryCount}){

    const [code, setCode] = useState('');
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState(new Map());
    const [userCard, setUserCard] = useState('');
    const [userName, setUserName] = useState('');
    const [alertCount, setAlertCount] = useState(false);
    const [print, setPrint] = useState(false);
    const [product, setProduct] = useState({code:'', name:'', price: ''});

    // Current Product
    const SUBTOTAL = product.price * count;
    const TOTAL = SUBTOTAL + ((SUBTOTAL*16)/100);

    useEffect(()=>{

        setTotal(()=>{

            return [...list.values()].reduce((sum,{props})=>{
                
                const result = props.product.price * count;

                return sum + result || 0;
            
            }, 0);

        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[list])

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

        if(!count || !product.price) return false;

        if(count > product.count){

            setAlertCount(true);

            return false;

        }

        const countResult = product.count - count;

        const BILL_GENERATOR = (count) => <BillsListItem 
        product={product} 
        setList={setList} 
        list={list} 
        count={count} 
        key={product.name}
        revertHandler={revertHandler}/>

        updateCount(countResult)

        let findProduct = list.get(product.name)

        if(findProduct){

            const {props:{ count: COUNT } } = findProduct

            setList(list => new Map(list.set(product.name, BILL_GENERATOR(+COUNT + +count))))
        
        }else setList(list => new Map([[product.name, BILL_GENERATOR(count)], ...list]))

    }

    function codeHandler(element){

        const value = element.target.value;

        if(isNaN(value)) return false;

        setCode(value);

        if(products.has(value)) setProduct({code: value, ...products.get(value)}); 
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

    function factureHandler(){

        setPrint(true)

        // if(!userCard || !userName) return false;
        // if(!list[0]) return false;

        // setBillsHistoryCount(count=>++count);

        // setBills(bills=>{

        //     bills.set(billHistoryCount,{

        //         list,
        //         total,
        //         userName,
        //         userCard,
        //         date: new Date()
        //     });

        // })

    }

    function userCardHandler(event){

        const value = event.target.value;

        setUserCard(value);

    }
    function userNameHandler(event){

        const value = event.target.value;

        setUserName(value);

    }

    if(zone !== 2) return false;

    return (
        <div className="facture-manager-container">
            <Bill userName={userName} userCard={userCard} list={list} total={total} print={print}/>
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

                    <div className="container"> Nombre <br/> <p className="value">{product.name}</p></div>
                    <div className="container"> Precio <br/> <p className="value">{product.price}</p></div>

                </div>

                <div className="history">
            
                    <h2>Historial</h2>
                    <div className="view">{[...list.values()]}</div>
            
                </div>

            </section>

            <section className="pay">

                <input type="text" placeholder="Cedula" className="card" onChange={userCardHandler}/>
                <input type="text" placeholder="Nombre" className="name" onChange={userNameHandler}/>

                <button className="facture" onClick={factureHandler}>Facturar</button>

                <div className="total">
                    
                    <h2 className="title">Sub Total<br/>{total} Bs.</h2>
                    <h2 className="title">Total (+IVA 16%)<br/>{total + ((total*16)/100)} Bs.</h2>
                    
                </div>

            </section>
        </div>

    );

}  

export default FactureManager;