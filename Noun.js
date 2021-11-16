import React from "react"

//Story Component renders story with props
const Story = (props) => {


    


    return (<div>


        <h1>MadLib</h1>
        <p> The {props.noun}  with the {props.noun2} was {props.adjective} and it looked {props.color}</p>



        
    </div>)
}


export default Noun;