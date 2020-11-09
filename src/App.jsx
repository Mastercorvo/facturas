import { useState } from 'react';
import './app.css';

import Header from './Header';
import ProductManager from './ProductManages';
import FactureManager from './FactureManager';
import BillsManager from './billsManager';
import Login from './Login';

let PRODUCTS = new Map([

    ['10',{name:'Cafe', price: 100, count: 12}],
    ['11',{name:'Arroz', price: 300, count: 2}],
    ['13',{name:'Manzana', price: 50, count: 3}]

].map(([index, value])=>{

    return [index, {...value, price: (+value.price).toFixed(2)}]

})
);

const App = () => {

    const [zone, setZone] = useState(2); 
    const [products, setProducts] = useState(PRODUCTS);
    const [bills, setBills] = useState(new Map());
    const [billHistoryCount, setBillsHistoryCount] = useState(0)

    return (
        <>
            <Header setZone={setZone}/>
            <Login zone={zone} />
            <ProductManager products={products} setProducts={setProducts} zone={zone} />
            <FactureManager zone={zone} products={products} 
            setProducts={setProducts} 
            setBills={setBills}
            setBillsHistoryCount={setBillsHistoryCount}
            billHistoryCount={billHistoryCount}/>
            <BillsManager zone={zone} />
        </>
        )

}

export default App;