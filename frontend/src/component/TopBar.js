import React from "react";
import Box from '@mui/material/Box';
//import { Button } from "@mui/material";
import GreenButton from "./GreenButton/GreenButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";

const pages = [
    { name: "Faire une doléance", link: "/app/MaDoleance" },
    { name: "Tendances", link: "/app" },
    { name: "Cahier de doléances", link: "/app/CahierDoleances" }
];

function TopBar (props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            
            <div className="DivHeader">
                <h1 className="Logo" ><a href="/app/Accueil">FranceDoléances</a></h1>

                <div className="DivNav">
                    <a className="HeaderLink" href="/app/MaDoleance">Faire une doléance</a>
                    <p>/</p>
                    <a className="HeaderLink" href="">Tendances</a>
                    <p>/</p>
                    <a className="HeaderLink" href="/app/CahierDoleances">Cahier de doléances</a>
                </div>

                <a className="ConnexionLink" href="">Connexion</a>

            </div>
            

            {/* {pages.map((page) => {
                return (
                    //<Button background-color="E99978"  component={Link} sx={{ ml: 3, mr: 3 }} to={page.link}>{page.name}</Button>
                    <GreenButton title={page.name} handleClick={"/google.com"} />
                )
            })} */}
        </Box>
    )
}

export default TopBar;