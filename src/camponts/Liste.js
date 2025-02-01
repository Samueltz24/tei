import styles from './Frase.module.css'
import Marca from './Marca'
function Liste(){
    return(
        <>
            <h1>minha lista</h1>
            <ul>
                <Marca  item='ferrari' ano_lacamento='ola'/>
                <Marca item='gol'/>
                <Marca/>
            </ul>
        </>
    )
}

export default Liste