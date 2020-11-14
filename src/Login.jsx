
import { useState } from 'react';
import './login.css';

const Users = new Map([['admin', 'admin']])

function Login({ zone, setZone }) {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    function userNameHandler(event){

        const value = event.target.value;
        
        setUserName(value);

    }

    function userPasswordHandler(event){

        const value = event.target.value;

        setUserPassword(value);

    }

    function buttonHandler(){

        let result = Users.get(userName);

        console.log(userPassword);
        if(!result) return;

        if(result !== userPassword.trim()) return;


        setUserName('');
        setUserPassword('');
        setZone(1);

    }

    function enterHandler(event){

        if(event.key === 'Enter') buttonHandler();

    }

    if(zone !== 0) return false;

    return(

        <>

            <div className="login">

                <div className="container">

                    <h1>Iniciar Sesión</h1>

                    <div className="input" onKeyDown={enterHandler}>

                        <input type="text" placeholder="Nombre de Usuario" value={userName} onChange={userNameHandler}/>
                        <input className="password" type="password" placeholder="Contraseña" value={userPassword} onChange={userPasswordHandler}/>

                        <button onClick={buttonHandler}>Ingresar</button>
                    </div>

                </div>

            </div>

        </>

    )

}

export default Login;