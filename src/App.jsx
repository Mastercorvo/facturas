import { useState } from 'react';
import './app.css';

import Header from './Header';
import ProductManager from './ProductManages';
import BillsManager from './BillsManager';
import Login from './Login';

const PRODUCTS = [

    {
        code: '10',
        name: 'cafe',
        price: 136,
    },
    {
        code: '11',
        name: 'arroz',
        price: 200,
    },
    {
        code: '12',
        name: 'manzana',
        price: 50,
    }

]

const App = () => {

    const [zone, setZone] = useState(0);
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