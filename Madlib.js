import React, {useState} from "react";

import Story from "./Story";

//Madlib component renders form and outputs madlib
const MadLib = () => {
    //Set madlib and formddata
    const [madlib, setMadlib] = useState(" ")
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    });


    //Update form in state, with data from form 
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    //Handle form submission, render madlib, reset form data
    const handleSubmit = e => {

        e.preventDefault();

        console.log(formData)
        setMadlib( <Story 
            noun={formData.noun}
            noun2={formData.noun2} 
            adjective={formData.adjective}
            color={formData.color}/>
            );
        
        setFormData({noun: "", noun2: "", adjective: "", color: ""});
    };




    //Render form

    return (<div>

        <form onSubmit={handleSubmit}>

        
        <div>
        <p>Enter Stuff</p>
        <input type="text" name="noun" placeholder="noun"  onChange={handleChange} ></input>
        <input type="text" name="noun2" placeholder="noun2" onChange={handleChange} ></input>
        <input type="text" name="adjective" placeholder="adjective"  onChange={handleChange} ></input>
        <input type="text" name="color"  placeholder="color" onChange={handleChange} ></input> 
        </div>

        <button id="submit">Add a madlib!</button>

        </form>

        {madlib}
    
        
    </div>)
}


export default MadLib;