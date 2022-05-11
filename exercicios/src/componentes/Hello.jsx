import React, { Fragment } from 'react'
// Para utilizar o fragment sem precisar de por React. é preciso importar o fragment.
export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h3>Sua idade é {props.idade}</h3>
    </Fragment>


// É possivel imprimir dois componentes utilizando um Array
// export default props => [
//         <h1>Bom dia {props.nome}</h1> ,
//         <h3>Sua idade é {props.idade}</h3>
//   ]
