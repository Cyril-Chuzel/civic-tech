import React from "react";
import { useQuery } from "@apollo/client";
import GreenButton from "../component/GreenButton/GreenButton";
import "./pages.css";

function Accueil(props) {
    return (
        <>
            <h1>Bienvenue Citoyens !</h1>

            <img src="/AcceuilImg.png" alt="Faire remonter les problématiques citoyennes, c'est possible !"/>

            <p>
                    Commence maintenant
                    et participe ici!
            </p>
                
            <GreenButton title={"faire une doléance"} handleClick="/app/MaDoleance" />
            {/* <button className="GreenButton" href="/app/MaDoleance">Faire une doléance</button> */}


            <div className="AccueilContent">

                <h2 className="ParaTitle left">Notre projet</h2>
                <p class="AccueilTxt">Le projet FranceDoléance a pour but de remettre au centre de nos vies le dialogue citoyen. Nous sommes désireux de proposer aux gens le support idéal de la démocratie locale, ici, vous pourrez converser, mettre en lumière et débattre sur les problématiques du quotidien. Il ne sera bientôt plus possible d’ignorer les voix qui se lèvent. 
                </p>

                <h2 className="ParaTitle right">Une doléance c'est quoi ?</h2>
                <p class="AccueilTxt">Une doléance constitue une requête, une remarque, ou un signalement d’une problématique. Ce moyen de faire remonter les inquiétudes des citoyens s’inscrit dans une démarche historique mais moderne, s’apparentant à une forme non-institutionnelle du référundum d’initiative populaire. 
                </p>

                <h2 className="ParaTitle left">Votre sécurité compte</h2>
                <p class="AccueilTxt">Notre but est de proposer la plus grande transparence possible à nos utilisateurs, notre code open source, 100% localisé en France assure une qualité d’échange appréciable. Nos conditions d’utilisations coincident bien sûr avec les règles du RGPD. En vous connectant, vous aurez besoin de nous fournir une pièce d’identité ainsi qu’un justificatif de domicile, afin de sécuriser votre compte. Vos informations personnelles ne seront pas rendues publiques ou revendues à des entreprises tierces. Vous serez ensuite renseigné anonymement en tant que “citoyen” pour vous permettre une liberté d’expression totale.
                </p>

            </div>

            <footer className="footer">
                <p>Contact I Informations légales I C.G.U I Modération I Politique de confidentialité</p>
                <p>&copy; FranceDoléance 2022 </p>
            </footer>

        </>
    )
}

export default Accueil;