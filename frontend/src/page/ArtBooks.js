import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ART_BOOKS, GET_ART_BOOK } from "../api/object-api"
import TitleContent from "../component/TitleContent";
import Card from "../component/Card";
import Grid from "@mui/material/Grid";


function ArtBooks(props) {
    const { data, loading, error } = useQuery(GET_ART_BOOKS);
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    const books = data.getArtBooks;
    return (
        <>
            <TitleContent title="Art Books" />
            <Grid container sx={{ alignItems: "center" }}>
            {
                books.map((book) => {
                    return (
                        <Grid item xs={2}>
                            <Card data={book} key={book.id} api={GET_ART_BOOK}/>
                        </Grid>
                    )
                })
            }
            </Grid>
        </>
    )
} 

export default ArtBooks;