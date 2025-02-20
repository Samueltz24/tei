import OlaMundo from "./camponts/OlaMundo"
import SayMayName from './camponts/SayMayName'
import Pessoas from './camponts/Pessoas'
import Frase from './camponts/Frase'
import Teste from './camponts/Teste';
import styles from './camponts/Frase.module.css'
import imagem from './imagem/rabonete.png'
import Cards from "./camponts/Cards";
import Senha from './camponts/Senha'
import Condicao from "./camponts/Condicao";
import Minhalista from "./camponts/Minhalista";
import Seunome from "./camponts/Seunome";
import Saudacao from "./camponts/Saudacao";
import { useState } from "react";
let lista =[imagem]
function App() {

  const url = 'https://images.app.goo.gl/sTBvn4n4eYBpCuXL7'
 const [nome,setNome] =useState()
  return (
    <div className="App">
     <p className={styles.frasesca}>seu nome</p>
     <Seunome setNome={setNome}/>
    <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
