
import './header.css';

function Header({setZone}) {

    return (

    <header>
        <button onClick={()=>setZone(0)}>Salir</button>
        <button onClick={()=>setZone(1)}>Ir a Administrar Productos</button>
        <button onClick={()=>setZone(2)}>Ir a Facturar</button>
        <button onClick={()=>setZone(3)}>Ir a Administrar Facturas</button>
    </header>

    )

}

export default Header;