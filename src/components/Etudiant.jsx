
function Etudiant(props) {
  return (
    <div>
      <p>Nom :{props.nom}   </p>
      <p>Prénom :{props.prenom}  </p>
      <p>Âge : {props.age}  </p>
      <p>Filière {props.filiere}  </p>
    </div>
  );
}

export default Etudiant;
