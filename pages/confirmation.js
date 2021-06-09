import { Box, Button, Container, Grid, IconButton, InputAdornment, makeStyles, TextField, Typography } from '@material-ui/core'
import axios from 'axios';
import Layout from '../src/components/layout';
import Image from 'next/image';
import CreateIcon from '@material-ui/icons/Create';
import { useRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import { useEffect, useRef, useState } from 'react';
import Loading from '../src/components/Loading';

const useStyles = makeStyles((theme) => ({
	textfield: {
		maxWidth: 400,
		"& label": {
			background: "#f2f2f2"
		},
		"& input": {
			padding: theme.spacing(1.5),
		},
		"& label, & input": {
			fontSize: "1.5em"
		}
	},
	button: {
		padding: theme.spacing(0.5, 2),
		maxWidth: 400
	}
}))

export default function Confirmation() {
	const classes = useStyles()
	const router = useRouter()
	const [yesNo, setYesNo] = useState()
	const [text, setText] = useState("")
	const [loading, setLoading] = useState(false)

	const handlerClick = () => {
		if(!(yesNo && text.trim())) return
		setLoading(true)
		axios.post(`/api/confirm/add`, {
			name: text.trim(),
			confirm: yesNo
		}).then(()=>{
			router.push("/thanks")	
		}).catch(()=>{
			setLoading(false)
		});
	}
	const handleChange = (e) => {
		setText(e.target.value)
	}
	const handlerRegresar = () => {
		router.push("/")
	}
	const handlerYesNo = (resp) => () => {
		setYesNo(resp)
	}
	return <Layout>
		{loading && <Loading/>}
		<Container>
			<Grid container align="center" justify="center" alignItems="center">
				<Grid item xs={12}>
					<Box mt={2}>
						<Image src="/images/save.png" width="600" height="209" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box mt={2}>
						<Image src="/images/palmita.png" width="88" height="50" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Typography className="principal">{"Con la bendición de Dios y nuestros padres "}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography className="secondary">{"¡ nos casamos !"}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box width={35} m={3} border="1px solid black" />
				</Grid>
				<Grid item xs={12}>
					<Typography className="principal" style={{ maxWidth: 500 }}>
						{`Tenemos el honor de invitarte a nuestra boda, y nos encantaría 
            			que seas parte de ese día tan importante de nuestras vidas.`}
					</Typography>
					<Typography className="principal">
						{`Por favor, confírmanos tu asistencia:`}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Box mt={2} >
						<TextField label="Nombre y Apellido" variant="outlined" fullWidth className={classes.textfield}
							onChange={handleChange}
							value={text}
							InputProps={{
								endAdornment: <InputAdornment position="end"><CreateIcon /></InputAdornment>,
							}}
						/>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box maxWidth={400} display="flex" mt={2}>
						<Box flexGrow={1} />
						<Button disableElevation
							onClick={handlerYesNo("yes")}
							color={yesNo === "yes" ? "primary" : "secondary"}
							variant={yesNo === "yes" ? "contained" : "outlined"}
							className={classes.button} >
							{"Si asistiré"}
						</Button>
						<Box flexGrow={1} />
						<Button disableElevation
							onClick={handlerYesNo("no")}
							color={yesNo === "no" ? "primary" : "secondary"}
							variant={yesNo === "no" ? "contained" : "outlined"}
							className={classes.button} >
							{"No asistiré"}
						</Button>
						<Box flexGrow={1} />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box mt={2}>
						<Button disableElevation color="secondary" variant="contained" onClick={handlerClick} className={classes.button} >{"ENVIAR"}</Button>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box mt={1}>
						<IconButton color="secondary" onClick={handlerRegresar} ><HomeIcon fontSize="large" /></IconButton>
					</Box>
				</Grid>
			</Grid>
		</Container>
	</Layout>
}
