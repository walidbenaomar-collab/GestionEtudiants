
import Compteur from './components/Compteur';
import Etudiant from './components/Etudiant'
import FormulaireEtudiant from './components/FormulaireEtudiant';
import GestionEtudiants from './components/GestionEtudiants';
import ListeEtudiants from './components/ListeEtudiants';
function App() {
  
  return (
<div>
{/*
<Etudiant nom="Alami"
        prenom="Ahmed"
        age={20}
        filiere="DAI"/>

  <Etudiant nom="Benali"
        prenom="sara"
        age="{21}"
        filiere="DS"/>

  <Etudiant nom="Idrissi"
        prenom="Youssef"
        age="{19}"
        filiere="DAI"/>

        */}
<ListeEtudiants/>
   
                                    
                                   {/*  <FormulaireEtudiant/> */}
<h1>Gestion des étudiants</h1>
<p>Bienvenue dans notre application React</p>
<button>Ajouter un étudiant</button>
</div>
  )
}

export default App;
