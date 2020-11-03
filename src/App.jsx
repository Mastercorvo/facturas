import { useState } from 'react';
import './app.css';

import Header from './Header';
import ProductManager from './ProductManages';
import BillsManager from './BillsManager';
import Login from './Login';

const PRODUCTS = new Map([

    ['10',{name:'Cafe',price: 100}],
    ['11',{name:'Arroz',price: 300}],
    ['13',{name:'Manzana',price: 50}]

]);

const App = () => {

    const [zone, setZone] = useState(1);
    const [products, setProducts] = useState(PRODUCTS);

    return (
        <>
            <Header setZone={setZone}/>
            <Login zone={zone} />
            <ProductManager products={products} setProducts={setProducts} zone={zone} />
            <BillsManager zone={zone} products={products} />
        </>
        )

}

export default App;