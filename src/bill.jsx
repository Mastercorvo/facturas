
import { useState } from 'react';
import './bill.css';

function ProductsItemList({list}){

    let COUNT = 0;

    return [...list.values()].map(({props})=>{

        const { product, count } = props;
        const { code, name, price } = product;

        COUNT++

        const subTotal = count*price;

        return <div className="item" key={COUNT}><p> <i>{code}</i> - {name} ({count})</p> 
        <p><strong>{(subTotal + ((subTotal)*16)/100).toFixed(2)} Bs.</strong></p></div>

    })

}

function Bill({userName, userCard, list, total, print, billHistoryCount, time, setPrint, facture}){

    return (
    <div className="bill-print" style={{display:print?'flex':'none'}}>

        <div className="cross" onClick={()=> setPrint(false)}></div>
        {facture && <div className="check-mark" onClick={()=> {

            setPrint(false);
            facture();
        
        }}></div>}

        <div>
            <div className="data-company">

                <div className="logo"></div>
                <div className="container">
                    <h3>Variedades Nelly Shop C.A</h3>
                    <p>Mercado Municipal Anaco-PASILLO 4</p>
                    <p>J-20501114S</p>
                </div>

            </div>

            <div className="data-client">

                <h3>Información del Cliente</h3>
                <p>Cliente: {userName}</p>
                <p>RIF/C.I.: {userCard}</p>

            </div>

            <div className="data-bill">

                <h4>FACTURA</h4>
                <div className="keys">
                <p>Factura:</p>
                    <p>Fecha:</p>
                </div>
                <div className="values">
                    <p>{billHistoryCount}</p>
                    <p>{time}</p>
                </div>
            </div>
            
            <div className="products"><ProductsItemList list={list}/></div>

            <div className="result">
                <div className="container"><p>Total</p> <p><strong>{(total+((total*16)/100)).toFixed(2)} Bs.</strong></p></div>
                <div className="container"><p>Tarj. Débito</p> <p><strong>{(total+((total*16)/100)).toFixed(2)} Bs.</strong></p></div>
            </div>

        </div>

    </div>)

}

export default Bill