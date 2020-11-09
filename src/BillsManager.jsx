
import './bills-manager.css';

function BillsHistoryListItem({bill: [index, { list, total, userName, userCard, time }]}){

    const listResult = [...list].map(([index, {props}]) => {

        const { product, count } = props;

        const subTotal = product.price * count;

        const total = (subTotal + ((subTotal*16)/100)).toFixed(2);

        return (
        <div className="product">

            <p>{product.code} - {index} {product.price} ({count})</p>
            <p><strong>{total} Bs.</strong></p>

        </div>)

    })

    return (
    <div className="bill" key={index}>

        <div className="top">

            <p>Nombre: {userName}</p>
            <p>Cedula: {userCard}</p>
            <p>Fecha {time}</p>

        </div>

        <div className="middle">
            
            <h3>Factura</h3>

            {listResult}
            
        </div>

        <div className="bottom">

            <p>Total:</p>
            <p><strong>{((total*16)/100).toFixed(2)}</strong></p>

        </div>

    </div>)

}

function BillsManger({zone, bills}){

    if(zone !== 3) return false;

    return (
        <div className="bills-manager-container">

            {[...bills].map(bill=><BillsHistoryListItem bill={bill}/>)}

        </div>)

}

export default BillsManger; 