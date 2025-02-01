import styles from './Frase.module.css' 
function Teste({ImaUrl,Texto}){
    return(
        <>
                <div className={styles.carte01}>
                    <div className={styles.img}>
                        <img className={styles.ima01} src={ImaUrl} alt={Texto}  />
                    </div>
                    <div className={styles.butao}>
                        clique aqui
                    </div>
                </div>
             

          
        </>
    )
}

export default Teste 