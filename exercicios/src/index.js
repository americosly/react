import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './componentes/Primeiro'
//import Menos from './componentes/Menos'
//import Hello from './componentes/Hello'
//import Multi from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'




ReactDOM.render(
    <div>
        <Pai nome="Roseildo" sobrenome="Soares Silva">
            <Filho nome="Américo"/>
        </Pai>
    </div>
, document.getElementById('root'))

// ReactDOM.render(
//     <div>

//         <Multi.BoaTarde nome="Américo"/>

//     </div>
//     , document.getElementById('root'))

// ReactDOM.render(<Multi.Temperatura/>, document.getElementById('root1'))

//ReactDOM.render(<Menos/>, document.getElementById('root'))
//ReactDOM.render(<Hello nome="Américo" idade={27}/>, document.getElementById('root1'))  

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))  ()