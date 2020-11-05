import { useState } from 'react';
import './app.css';

import Header from './Header';
import ProductManager from './ProductManages';
import BillsManager from './BillsManager';
import Login from './Login';

const PRODUCTS = new Map([

    ['10',{name:'Cafe',price: 100, count: 12}],
    ['11',{name:'Arroz',price: 300, count: 2}],
    ['13',{name:'Manzana',price: 50, count: 3}]

]);

const App = () => {

    const [zone, setZone] = useState(2); 
    
    const [products, setProducts] = useState(PRODUCTS);

    return (
        <>
            <Header setZone={setZone}/>
            <Login zone={zone} />
            <ProductManager products={products} setProducts={setProducts} zone={zone} />
            <BillsManager zone={zone} products={products} setProducts={setProducts} />
        </>
        )

}

export default App;