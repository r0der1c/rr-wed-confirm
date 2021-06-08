import { Box, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../src/components/layout';

const useStyles = makeStyles((theme) => ({
	textfield: {
		maxWidth: 400,
		"& label": {
			background: "#f2f2f2"
		},
		"& label, & input": {
			fontSize: "1.5em"
		}
	},
	button: {
		padding: theme.spacing(1, 5)
	},
	spacing:{
		letterSpacing: "0.25em"
	},
	size175em:{
		fontSize: "1.75em !important"
	}
}))

export default function Thanks() {
	const classes = useStyles()
	const router = useRouter()

	const handlerRegresar = () => {
		router.push("/")
	}
	return <Layout>
		<Container>
			<Grid container align="center" justify="center" alignItems="center">
				<Grid item xs={12}>
					<Box mt={12} mb={4}>
						<Image src="/images/palmita.png" width="88" height="50" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Typography className={`principal ${classes.spacing} ${classes.size175em}`}>{"¡ MUCHAS GRACIAS !"}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className="principal">{"por confirmarnos tu asistencia."}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box width={45} m={6} border="1px solid black" />
				</Grid>
				<Grid item xs={12}>
					<Typography className={`principal ${classes.spacing}`} >
						{`NOTA:`}
					</Typography>
					<Typography className="tertiary" style={{ maxWidth: 400 }}>
						{`* Se tomarán todas las medidas de bioseguridad
						necesarias para la protección de todos, no olvides traer 
						tu mascarilla y desinfectar tus manos constantemente.`}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box mt={3}>
						<IconButton color="secondary" onClick={handlerRegresar} ><HomeIcon fontSize="large" /></IconButton>
					</Box>
				</Grid>
			</Grid>
		</Container>
	</Layout>
}
