import React, {usesState, useEffect}from "react";
import axios from 'axios';

const RamdomUseer = () =>{
    
    useEffect(() => {
        const apiURL ="https://randomuser.me/api/";

        axios.get(apiURL)
        
        .then(respuesta =>{
            console.log(respuesta.data.results[0].name.first);
        });
    },[]);

    return(
        <div>
            hola a todos
        </div>
    )

}
 export default RamdomUseer;