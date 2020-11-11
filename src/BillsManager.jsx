
import './bills-manager.css';

import Bill from './bill';
import { useState } from 'react';

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

            <p>Nombre: {userName}</p>
            <p>Cedula: {userCard}</p>
            <p>Fecha {time}</p>

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

    function printHandler(data){

        setBillData(data);
        setPrint(true);

    }

    if(zone !== 3) return false;

    return (
        <div className="bills-manager-container">

            {print && <Bill print={print} setPrint={setPrint} {...billData}/>}

            <input type="text" placeholder="Buscar Por Código..." className="search"/>

            {[...bills].map(bill=><BillsHistoryListItem bill={bill} key={bill[0]} printHandler={printHandler}/>)}

        </div>)

}

export default BillsManger; 