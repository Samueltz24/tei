    function Minhalista({itens}){
    return(
        <>
        <h3> 
            lista de pessoas
        </h3>
        {itens.length > 0 ? (
            itens.map((item,index) => 
                <p key={index}>
                    {item}
                </p>)
        ) :(
                <p>nada encontrado</p>
            )}
        </>
    )
}

export default Minhalista 