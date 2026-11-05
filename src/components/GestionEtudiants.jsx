import { useState } from "react";


function GestionEtudiants(){
      const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const [etudiants, setEtudiants] = useState([]);

    function ajouterEtudiant() {
    const nouvelEtudiant = {
      nom: nom,
      prenom: prenom,
      age: age
    };

    setEtudiants([...etudiants, nouvelEtudiant]);

    setNom("");
    setPrenom("");
    setAge("");
  }

    return(
<div>
    <h2>Gestion des étudiants</h2>

      <div>
        <label>Nom : </label>
        <input
          type="text" placeholder="Saisir nom..." value={nom} onChange={(e) => setNom(e.target.value)}
        />
      </div>

      <div>
        <label>Prénom : </label>
        <input
          type="text"
          placeholder="Saisir prénom..."
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>

      <div>
        <label>Âge : </label>
        <input
          type="number"
          placeholder="Saisir âge..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <button onClick={ajouterEtudiant}>Ajouter</button>

      <div>
        {etudiants.map((etudiant, index) => (
          <p key={index}>
            {etudiant.nom} {etudiant.prenom} — {etudiant.age} ans
          </p>
        ))}
      </div>

</div>
    )
}
export default GestionEtudiants;