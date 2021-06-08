import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    cargando:{
        position:"absolute",
        top: 0,
        left:0,
        width: "100%",
        height: "100%",
        // background: "rgba(0,0,0,0.25)",
        backdropFilter: "grayscale(1) blur(2px)",        
        display: "flex",
        alignItems: "center",
        zIndex: 10000,
        "& *":{
            margin: 'auto',
            position: 'sticky',
        }
    }
}));

export default function Loading(props) {
    const classes = useStyles();

    return (<>
        <Box className={classes.cargando}>
            <Box display="flex" flexDirection="column" top={200}>
                <CircularProgress size={100} />
                <Box fontSize="h5.fontSize" pt={3} fontWeight="bold" alignItems="center">
                    {props.label}
                </Box>
            </Box>
        </Box>
    </>)
}