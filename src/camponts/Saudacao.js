import styles from './Frase.module.css'
function Saudacao ({nome}){

    function gerasaudacao(algumNome){
        return `ola ${algumNome} tudo bem?`
    }
    return(
        <>
            {nome && <p className={styles.sau}>{gerasaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao