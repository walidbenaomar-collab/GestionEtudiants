import { useState } from "react";


function FormulaireEtudiant(){
      const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [etudiant, setEtudiant] = useState(null);

    function ajouterEtudiant(e) {
    e.preventDefault();

    setEtudiant({
      nom: nom,
      prenom: prenom,
      age: age
    });

    setNom("");
    setPrenom("");
    setAge("");
  }

    return(
        <div>
                 <h2>Aperçu attendu</h2>

      <form onSubmit={ajouterEtudiant}>
        <div>
          <label>Nom : </label>
          <input
            type="text"
            placeholder="Saisir nom..."
            value={nom}
            onChange={(e) => setNom(e.target.value)}
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

        <button type="submit">Ajouter</button>
      </form>

      {etudiant && (
        <div>
          <h3>Informations de l'étudiant</h3>
          <p>Nom : {etudiant.nom}</p>
          <p>Prénom : {etudiant.prenom}</p>
          <p>Âge : {etudiant.age}</p>
        </div>
      )}
        </div>
    )

}
export default FormulaireEtudiant;