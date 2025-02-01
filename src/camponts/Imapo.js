import imagem from '../imagem/presunto.png'
import imagem1 from '../imagem/rabonete.png'
import imagem2 from '../imagem/coco.png'

const image01 = [imagem,imagem1,imagem2]

function Imapo({ImaUrl,Texto}){
    return
        <img src={ImaUrl} alt={Texto} />
    
}

export {image01}
export default Imapo