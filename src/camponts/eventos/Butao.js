import styles from '../Frase.module.css' 
import Cards from '../Cards'
function Butao({text,numero,}){
    function opa(){
        
        alert(`numero: ${numero}`)
    }
    return (
        <>
    <button className={styles.bu} onClick={opa} >{text}</button>
        </>
        
)
}
export default Butao