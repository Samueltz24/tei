import styles from './Frase.module.css'
function Seunome({setNome}){
    return(
        <>
        <p className={styles.p} >digite seu nome</p>
        <input className={styles.no} type="text" placeholder="qual o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </>
    )
}
export default Seunome