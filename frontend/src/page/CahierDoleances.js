import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DOLEANCES, GET_DOLEANCE } from "../api/object-api"
import Card from "../component/Card";
import Grid from "@mui/material/Grid";
import "./pages.css";

function CahierDoleances(props) {

    const { data, loading, error } = useQuery(GET_DOLEANCES);
    if(loading) {
        return <></>
    }
    if(error) {
        return <>
        </>
    }

    const doleances = data.getDoleances;
    return (
        <>
            <span className="SpanListInfo"><p>Sujet</p><p className="ListDate">Date</p></span>

            <Grid container sx={{ alignItems: "center" }}>
            {
                doleances.map((doleance) => {
                    return (
                        <Grid item xs={0}>
                            <Card data={doleance} key={doleance.id} api={GET_DOLEANCE}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
}

export default CahierDoleances;