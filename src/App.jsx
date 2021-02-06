import { useEffect, useState } from 'react';
import './App.css';

import Header from './Header';
import ProductManager from './ProductManages';
import FactureManager from './FactureManager';
import BillsManager from './BillsManager';
import Login from './Login';

let PRODUCTS = new Map([

    ['10',{name:'Cafe', price: 100, count: 12}],
    ['11',{name:'Arroz', price: 300, count: 2}],
    ['13',{name:'Manzana', price: 50, count: 3}]

].map(([index, value])=>[index, {...value, price: (+value.price).toFixed(2)}]));

JSON.parse(window.localStorage.getItem('bills') || "[]").forEach(([index, { list }])=>{

    if(!Object.values(list)[0]) localStorage.clear();

})

const App = () => {

    const GET_PRODUCT = JSON.parse(window.localStorage.getItem('products'));
    const GET_BILLS = JSON.parse(window.localStorage.getItem('bills'));
    const GET_billHistoryCount = JSON.parse(window.localStorage.getItem('billHistoryCount'))

    const [zone, setZone] = useState(0); 
    const [products, setProducts] = useState(new Map(GET_PRODUCT) || PRODUCTS);
    const [bills, setBills] = useState(new Map(GET_BILLS) || new Map());
    const [billHistoryCount, setBillsHistoryCount] = useState(GET_billHistoryCount || 1)

    useEffect(()=>{

        window.localStorage.setItem('bills', JSON.stringify([...bills]));

    },[bills])
    useEffect(()=>{

        window.localStorage.setItem('products', JSON.stringify([...products]));

    },[products])
    useEffect(()=>{

        window.localStorage.setItem('billHistoryCount', JSON.stringify(billHistoryCount));

    },[billHistoryCount])

    return (
        <>
            {zone !== 0 && <Header setZone={setZone}/>}
            <Login zone={zone} setZone={setZone} />
            <ProductManager products={products} setProducts={setProducts} zone={zone} />
            <FactureManager zone={zone} products={products} 
            setProducts={setProducts} 
            setBills={setBills}
            setBillsHistoryCount={setBillsHistoryCount}
            billHistoryCount={billHistoryCount}/>
            <BillsManager zone={zone} bills={bills} />
        </>
        )

}

export default App;