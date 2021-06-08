import { Box, makeStyles } from '@material-ui/core'
import Image from 'next/image';
const useStyles = makeStyles((theme) => ({
    content:{
    }
}))

export default function Layout(props) {
    const classes = useStyles()
    return <Box className={classes.content} >
        {props.children}
    </Box>
    
}
