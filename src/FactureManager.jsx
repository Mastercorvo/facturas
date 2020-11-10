import { useLayoutEffect, useRef, useState } from 'react';
import './facture-manager.css';
import Bill from './bill';
import { InputSup } from './global/elements';

function BillsListItem({revertHandler, product, setList, count, setTotal}){

    function deleteHandler(){

        setList(list => {

            list.delete(product.name)

            return new Map(list);
        
        });

        revertHandler(count, product.code);

        setTotal(value=>value - (product.price * count));

    }

    const subTotal = count * product.price;
    const total = (subTotal + ((subTotal*16)/100)).toFixed(2)

    return (

        <div className="bill-history-Item" key={product.name} >
            <p>{count} {product.name} a {product.price} Bs. Total: {total} Bs.</p>
            <button onClick={deleteHandler}>Eliminar</button>
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
    const [TIME, SET_TIME] = useState(undefined);
    const refSetTime = useRef(undefined);

    // Current Product
    const SUBTOTAL = product.price * count;
    const TOTAL = (SUBTOTAL + ((SUBTOTAL*16)/100)).toFixed(2);

    useLayoutEffect(()=>{

        if(refSetTime.current){

            refSetTime.current()

            refSetTime.current = undefined;

        }

    });

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

            const product = products.get(index);

            return new Map(products.set(code, {...product, count: product.count + +value}));

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
        revertHandler={revertHandler}
        setTotal={setTotal}/>

        updateCount(countResult)

        let findProduct = list.get(product.name)

        if(findProduct){

            const { props: { count: COUNT } } = findProduct

            setList(list => new Map(list.set(product.name, BILL_GENERATOR(+COUNT + +count))))
        
        }else setList(list => new Map([[product.name, BILL_GENERATOR(count)], ...list]));

        setTotal(value=> value + (product.price * count));

    }

    function codeHandler(element){

        const value = element.target.value;

        if(/\D/.test(value)) return false;

        setCode(value);

        if(products.has(value)) setProduct({code: value, ...products.get(value)}); 
            else setProduct({code:'', name:'', price: ''});

        return true;

    }

    function countHandler(count){

        const value = count.target.value;

        if(/\D/.test(value)) return false;
        if(value[0] === '0' || value[1] === '0') return false;
        if(value > Number.MAX_SAFE_INTEGER) return false;
        if((value * product.price) > Number.MAX_SAFE_INTEGER) return false;

        if(value)setCount(value)
            else setCount(1)

        return true

    }

    function factureHandler(){

        if(!userCard || !userName) return false;
        if(![...list][0]) return false;
        
        setPrint(true)

        const DATE = new Date();

        let year = `${DATE.getFullYear()}`;
        let month = `/${DATE.getMonth()}`;
        let day = `/${DATE.getDate()}`;
        let hours =` ${'Hora: ' + DATE.getHours()}`;
        let minutes = `${':' + DATE.getMinutes()}`
        let seconds = `${':' + DATE.getSeconds()}`;
        let time = year + month + day + hours + minutes + seconds;

        refSetTime.current = SET_TIME(time);

    }

    function RESET(revert = true){

        setAlertCount(false);
        revert && [...list].forEach(([index, { props: { count, product } }])=>{

            revertHandler(count, product.code)

        })
        setList(new Map());
        setCode('');
        setCount('');
        setUserCard('');
        setUserName('');
        setTotal(0);
        SET_TIME(undefined);
        setProduct({code:'', name:'', price: ''})

    }

    function facture(){

        setBillsHistoryCount(count=>++count);

        setBills(bills=>{

            return new Map([[billHistoryCount,{
                list,
                total,
                userName,
                userCard,
                time: TIME
            }], ...bills]);

        });

        RESET(false);

    }

    function userCardHandler(event){

        const value = event.target.value;

        if(/\D/.test(value)) return false;

        setUserCard(value);
        return true;

    }
    function userNameHandler(event){

        const value = event.target.value;

        setUserName(value);
        return true;

    }

    if(zone !== 2) return false;

    return (
        <div className="facture-manager-container">
            <div className="reset" onClick={RESET}></div>
            <Bill userName={userName} 
            userCard={userCard} 
            list={list} 
            total={total} 
            print={print} 
            billHistoryCount={billHistoryCount}
            time={TIME}
            setPrint={setPrint}
            facture={facture}/>
            <section  className="calculator">

                <div className="main-input">
            
                    <InputSup placeholder="Código" value={code} onChange={codeHandler}/>
                    <InputSup placeholder="Cantidad: 1" value={count===1?'':count} onChange={countHandler}/>
            
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
                    <div className="container"> Precio <br/> <p className="value">{product.price + (product.price?' Bs.':'')}</p></div>

                </div>

                <div className="history">
            
                    <h2>Historial</h2>
                    <div className="view">{[...list.values()]}</div>
            
                </div>

            </section>

            <section className="pay">

                <InputSup placeholder="Cedula" className="card" value={userCard} onChange={userCardHandler}/>
                <InputSup placeholder="Nombre" className="name" value={userName} onChange={userNameHandler}/>

                <button className="facture" onClick={factureHandler}>Facturar</button>

                <div className="total">
                    
                    <h2 className="title">Sub Total<br/>{(total).toFixed(2)} Bs.</h2>
                    <h2 className="title">Total (+IVA 16%)<br/>{(total + ((total*16)/100)).toFixed(2)} Bs.</h2>
                    
                </div>

            </section>
        </div>

    );

}  

export default FactureManager;