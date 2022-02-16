import React,{useState} from 'react';
// rsc 

const argent = (props) => {
// let [bonjour,setBonjour] = useState("ok")
// let test = ()=>{
// setBonjour("aurevoir")

// }

    return (
        <div className="text-center my-4">
            <h1 className="fw-bold fs-1">Mon argent: {props.argent}</h1>
            
        
        </div>
    );
};


export default argent;
