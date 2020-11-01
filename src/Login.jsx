
import './login.css';

function Login({ zone, setZone }) {

    if(zone !== 0) return false;

    return(

        <>

            <div className="login">

                <input type="text" placeholder="Nombre de Usuario"/>
                <input type="password" placeholder="Contraseña"/>
                <button onClick={()=>{setZone(1)}}>Administrar Productos</button>
                <button onClick={()=>{setZone(2)}}>Ingresar a Facturas</button>

            </div>

        </>

    )

}

export default Login;