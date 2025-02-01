import OlaMundo from "./camponts/OlaMundo"
import SayMayName from './camponts/SayMayName'
import Pessoas from './camponts/Pessoas'
import Frase from './camponts/Frase'
import Teste from './camponts/Teste';
import styles from './camponts/Frase.module.css'
import imagem from './imagem/rabonete.png'
import Cards from "./camponts/Cards";
let lista =[imagem]
function App() {

  const url = 'https://images.app.goo.gl/sTBvn4n4eYBpCuXL7'
  
  return (
    <div className="App">
     <p className={styles.frasesca}>sua fruta preferida</p>
     <div className={styles.cart}>
      <Cards/>
     </div>
     <p className={styles.frasesca}>sua verdura preferida</p>
     <div className={styles.cart}>
      <Cards/>
     </div>
    </div>
  );
}

export default App;
