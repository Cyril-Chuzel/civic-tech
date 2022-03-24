import React from "react";
import { useNavigate } from "react-router-dom";
import "./GreenButton.css" ;

function GreenButton({ title, handleClick }) {
    return (
        <button
            onClick={useNavigate(handleClick)}
            className="GreenButton"
        >
            {title}
        </button>
    )
    }

export default GreenButton;