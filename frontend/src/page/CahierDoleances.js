import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DOLEANCES, GET_DOLEANCE } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";
import GreenButton from "../component/GreenButton/GreenButton";
import "./pages.css";

function CahierDoleances(props) {

    const { data, loading, error } = useQuery(GET_DOLEANCES);
    if(loading) {
        return <></>
    }
    if(error) {
        return <>
            <h1>nope</h1>
        </>
    }

    const doleances = data.getDoleances;
    return (
        <>
            <h1>hello</h1>
            {/* <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_ROMAN}/>
                        </Grid>
                    )
                })
            }
            </Grid> */}
        </>
    )
}

export default CahierDoleances;