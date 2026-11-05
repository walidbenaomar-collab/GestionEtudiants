

const etudiants = [ 
{ id: 1, nom: "Alami", prenom: "Ahmed", age: 20 },
{ id: 2, nom: "Benali", prenom: "Sara", age: 21 }, 
{ id: 3, nom: "Idrissi", prenom: "Youssef", age: 19 },
{ id: 4, nom: "Amrani", prenom: "Salma", age: 22 }, 
{ id: 5, nom: "Tazi", prenom: "Omar", age: 20 } ];

function ListeEtudiants(){
return(
    
    <div>
     <p>liste des etudiants </p>
<table border={1}>
    <th>Nom</th> <th>prenom</th> <th>age</th>
     {etudiants.map((wa)=><tr key={wa.id}>  <td>{wa.nom}</td> <td>{wa.prenom}</td> <td> {wa.age}</td>  </tr>  )}

</table>   
    </div>

);
}
export default ListeEtudiants;