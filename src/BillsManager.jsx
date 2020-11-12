
import './bills-manager.css';

import Bill from './bill';
import { useEffect, useState } from 'react';
import { InputSup } from './global/elements';

function BillsHistoryListItem({bill: [index, value], printHandler}){

    const { list, total, userName, userCard, time } = value 

    const listResult = [...list].map(([index, {props}]) => {

        const { product, count } = props;

        const subTotal = product.price * count;

        const total = (subTotal + ((subTotal*16)/100)).toFixed(2);

        return (
        <div className="product" key={product.name}>

            <p>{product.code} - {index} {product.price} ({count})</p>
            <p><strong>{total} Bs.</strong></p>

        </div>)

    })

    return (
    <div className="bill" key={index}>

        <div className="print" onClick={()=>printHandler({...value, billHistoryCount: index})}></div>

        <div className="top">

            <p className="date">Fecha {time}</p>
            <p>Nombre: {userName} ----- Cedula: {userCard}</p>

        </div>

        <div className="middle">
            
            <h3>Factura: {index}</h3>

            {listResult}
            
        </div>

        <div className="bottom">

            <p>Total:</p>
            <p><strong>{(total + ((total*16)/100)).toFixed(2)}</strong></p>

        </div>

    </div>)

}

function BillsManger({zone, bills}){

    const [billData, setBillData] = useState({});
    const [print, setPrint] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [viewBills, setViewBills] = useState(bills);

    useEffect(()=>{

        setViewBills(bills)

    },[bills])

    function printHandler(data){

        setBillData(data);
        setPrint(true);

    }

    function searchHandler(event){

        let input = event.target.value;
        if(/\D/.test(input)) return;
        if(input === ''){

            setViewBills(bills);

        }else{

            const result = [...bills]
            .filter(([index,])=>new RegExp(input).test(index))
            .map(([index, value])=>[(index + '').match(input), [index ,value]])
            .sort(([a], [b])=>b[0].length - a[0].length)
            .sort(([{ indexA }], [{ indexB }])=>indexA - indexB)
            .map(([, data])=>data);

            setViewBills(new Map(result));

        }
        setInputSearch(input);
        return true;

    }

    if(zone !== 3) return false;

    return (
        <div className="bills-manager">

            <InputSup placeholder="Buscar Por Código..." value={inputSearch} onChange={searchHandler} className="search"/>

            <div className="bills-manager-container">

                {print && <Bill print={print} setPrint={setPrint} {...billData}/>}
                {[...viewBills].map(bill=><BillsHistoryListItem bill={bill} key={bill[0]} printHandler={printHandler}/>)}

            </div>


        </div>)

}

export default BillsManger; 