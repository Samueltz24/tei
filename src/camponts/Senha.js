import styles from './Frase.module.css'
import {useState} from 'react'
function Senha(){
    function cadastra(e){
        e.preventDefault()
        alert(`usuario ${name} foi cadastrado com a senha ${password}`)
    }
    const [name,SetName] = useState()
    const [password,setPassword] = useState()
    return(
        <>
        <div  className={styles.esque}>
        <form onSubmit={cadastra}>
                <div>
                    <label htmlFor="name">nome:</label> 
                    <input 
                    className={styles.enviar}
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="seu nome"
                    onChange={(e) => SetName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">senha:</label>
                    <input className={styles.enviar}
                    type="password"
                    id='password'
                    name='password'
                     placeholder="digite sua senha"
                     onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor=""></label>
                </div>
                <div>
                    <button className={styles.buta}>cadastra</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Senha