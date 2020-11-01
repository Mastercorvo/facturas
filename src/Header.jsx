
import './header.css';

function Header({setZone}) {

    return (

    <header>
        <button onClick={()=>setZone(0)}>Volver a Inicio</button>
        <button onClick={()=>setZone(1)}>Ir a Administrar Productos</button>
        <button onClick={()=>setZone(2)}>Ir a Facturar</button>
    </header>

    )

}

export default Header;