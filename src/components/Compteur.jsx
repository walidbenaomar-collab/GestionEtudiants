import { useState } from "react";

function Compteur(){
    const [Compteur,setCompteur]=useState(0);
        function incrementer(){
            setCompteur(Compteur+1);

        }
        function decrementer(){
            setCompteur(Compteur-1);
        }
        function reinitialiser(){
            setCompteur(0);
        }
    return(
    <div>
     <p>compteur: {Compteur} </p>
         <button onClick={incrementer}>incrementer</button>
         <button onClick={decrementer}>decrementer</button>
         <button onClick={reinitialiser}>reinitialiser</button>
              
              
    </div>
        
    );
}
export default Compteur; 