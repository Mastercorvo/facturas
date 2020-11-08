
import { useState } from 'react';
import './bill.css';

function ProductsItemList({list}){

    let COUNT = 0;

    return [...list.values()].map(({props})=>{

        const { product, count } = props;
        const { code, name, price } = product;

        COUNT++

        return <div className="item" key={COUNT}><p> <i>{code}</i> - {name} ({count})</p> 
        <p><strong>{((count*price)*16)/100}</strong> Bs.</p></div>

    })

}

function Bill({userName, userCard, list, total, print}){

    const DATE = new Date();

    let year = `${DATE.getFullYear()}`;
    let month = `/${DATE.getMonth()}`;
    let day = `/${DATE.getDate()}`;
    let hours =` ${'Hora: ' + DATE.getHours()}`;
    let minutes = `${':' + DATE.getMinutes()}`
    let seconds = `${':' + DATE.getSeconds()}`;
    let time = year + month + day + hours + minutes + seconds;

    return (
    <div className="bill" style={{display:print?'flex':'none'}}>

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
                    <p>Ejemplo</p>
                    <p>{time}</p>
                </div>
            </div>
            
            <div className="products"><ProductsItemList list={list}/></div>

            <div className="result">

                <p>Total: </p>
                <p>tarjeta de débito</p>

            </div>

        </div>

    </div>)

}

export default Bill