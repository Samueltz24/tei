import { useState } from "react"
function Condicao(){
    const [email,setEmail] = useState()
    const [useremail,setUseremail] =useState()
    function enviar(e){
        e.preventDefault()
        setUseremail(email)
 
    }
    function Lipar(e){
        e.preventDefault()
        setUseremail('')
    }
    return(
        <>
            <h2>se cadastre</h2>
        <form>
            <input type='email' placeholder="digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            <button type='submit' onClick={enviar}>enviar</button>
            {useremail &&(
                <div>
                <p>
                    seu email é : {useremail}
                </p>
                <button onClick={Lipar}>limpar</button>
            </div>
            )}
        </form>
        
        </>
    )
}
export default Condicao