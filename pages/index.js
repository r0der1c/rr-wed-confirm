import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../src/components/layout';

const useStyles = makeStyles((theme) => ({
  textfield:{
    maxWidth: 400,
    "& label":{
      background: "#f2f2f2"
    },
    "& label, & input":{
      fontSize: "1.5em"
    }
  },
  button:{
    padding: theme.spacing(0.5,2)
  }
}))

export default function Home() {
  const classes = useStyles()
  const router = useRouter()

  const handlerClick = () => {
    router.push("/confirmation")
  }
  return <Layout>
    <Container disableGutters> 
      <Grid container align = "center" justify = "center" alignItems = "center">
        <Grid item xs={12}>
          <Box mt={1} mb={2}>
            <Image src="/images/foto.png" width="516" height="700"/> 
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography className="tertiary">
            {`"Uno solo puede ser vencido, pero dos podrán resistir.`}
          </Typography>
          <Typography className="tertiary">
            {`Y ademas, la cuerda de tres hilos no se rompe fácilmente".`}
          </Typography>
          <Typography className="tertiary">
            {`Eclesiastés 4:12`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Button disableElevation color="secondary" variant="contained" onClick={handlerClick} className={classes.button} >{"Save the Date"}</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Layout>
}