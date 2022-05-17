import React from 'react'


export default props => 
    
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filho</h2>
        <ul>
            
            {React.cloneElement(props.children, {...props, ...props.children.props})}

            {/* <Filho nome="Américo" sobrenome={ props.sobrenome} /> */}
        </ul>
    </div>