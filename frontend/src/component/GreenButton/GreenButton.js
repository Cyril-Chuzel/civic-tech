import React from "react";
import { useNavigate } from "react-router-dom";
import "./GreenButton.css" ;

function GreenButton({ title, handleClick }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(handleClick)}
            className="GreenButton"
        >
            {title}
        </button>
    )
}

export default GreenButton;