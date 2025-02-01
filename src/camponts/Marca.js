import styles from './Frase.module.css'
import PropTypes from 'prop-types'
function Marca({item, ano_lacamento}){
    return(
        <>
        <li className={styles.li}>
            {item} - {ano_lacamento}
        </li>
        </>
    )
}
Marca.propTypes={
    item:PropTypes.string.isRequired, /*mostra o erro no console se nao for uma letra*/ 
    ano_lacamento: PropTypes.number, /*mostra o erro no console se nao for um numero*/
}

Marca.defaultProps={
    item: 'falto a marca',
    ano_lacamento: 0,
}

export default Marca 