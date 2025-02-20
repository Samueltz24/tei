import styles from './Frase.module.css' 
import Butao from './eventos/Butao'
function Teste({ImaUrl,Texto,numero}){
    return(
        <>
                <div className={styles.carte01}>
                    <div className={styles.img}>
                        <img className={styles.ima01} src={ImaUrl} alt={Texto}  />
                    </div>
                    <div className={styles.butao}>
                        <Butao text='clique aqui' numero={numero}/>
                    </div>
                </div>
             

          
        </>
    )
}

export default Teste 