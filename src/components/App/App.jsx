import React, {Fragment} from "react";
import Header from "../Header/Header.jsx";
import './App.css'
import Coordonne from "../Coordonne/Coordonne.jsx";
import Competence from "../Competence/Competence.jsx";
import Loisir from "../Loisir/Loisir.jsx";
import Experience from "../Experience/Experience.jsx";
import Formation from "../Formation/Formation.jsx";
function App() {

  return (
    <Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <div className="left">
            <Coordonne/>
            <Competence/>
            <Loisir/>
        </div>
        <div className="right">
            <Experience/>
            <Formation/>
        </div>
      </main>
      <footer>

      </footer>
    </Fragment>
  )
}

export default App
