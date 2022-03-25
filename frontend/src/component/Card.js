import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RomanModal from "./RomanModal";

function Card ({ data, api }) {
    const [open, setOpen] = useState(false);

    const onClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box component="button" onClick={onClick} sx={{ width: 1000,  m: 1}}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography>{data.title}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>{data.date}</Typography>
                    </Grid>
                </Grid>
            </Box>
            <RomanModal id={data.id} open={open} handleClose={handleClose} api={api}/>
            
        </>
    )
}

export default Card;