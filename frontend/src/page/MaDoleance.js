import React from "react";
import GreenButton from "../component/GreenButton/GreenButton";
import "./pages.css";

function MaDoleance(props) {
    return (
        <>
            <h1>A vous de jouer !</h1>

            <img className="HandFlag" src="../HandFlag.png" alt="HandFlag"/>

            <div className="PubliDiv">
                    <h2 className="PubliTitle">Ceci est un bon titre</h2>
                    <p className="PubliTxt">Une bonne doléance définit synthétiquement une problématique, une proposition ou une idée d’action citoyenne. Le but est de se faire comprendre par tous, afin que l’ensemble des citoyens de la communauté puissent partager leurs avis.</p>
            </div>
           
            <GreenButton title={"Publier"} handleClick={"/app/MaDoleance"} />
        </>
    )
}

export default MaDoleance;