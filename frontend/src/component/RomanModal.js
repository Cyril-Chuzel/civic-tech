import React from "react";
import { useQuery } from "@apollo/client";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { GET_DOLEANCE } from "../api/object-api";

function RomanModal ({ id, open, handleClose, api }) {
    const { data, loading, error } = useQuery(api, { variables: { id } });
    if(loading) {
        return <></>
    }
    if(error) {
        return <></>
    }

    let object = {};

    if (api === GET_DOLEANCE) {
        object = data.getDoleance;
    }
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="title"
            aria-describedby="description"
        >
            <Box sx={{ 
                position: 'absolute', 
                left: '50%', 
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Paper sx={{ p: 3 }}>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography id="title" variant="h6" component="h2">                            
                                {object.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={0}>
                            <Typography id="date" variant="h6" component="h2">                            
                                Date{object.date}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={12}>
                            <Typography id="content" sx={{ mt: 2 }}>
                                {object.content}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Modal>
    )
}

export default RomanModal;