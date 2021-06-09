import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../src/components/layout';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
	button: {
		padding: theme.spacing(1, 5)
	},
	table:{
		"& *":{
			fontSize: "1.1em !important"
		},
		"& thead th":{
			fontWeight: "bold"
		}
	}
}))

export default function Confirmed() {
	const classes = useStyles()
	const router = useRouter()
	const [data, setData] = useState([])

	useEffect(async () => {
		const resp = await axios.get(`/api/confirm/getAll`)		
		setData(resp.data)
	}, [])

	const handlerRegresar = () => {
		router.push("/")
	}
	return <Layout>
		<Container>
			<Grid container align="center" justify="center" alignItems="center">
				<Grid item xs={12}>
					<Box mt={4} >
						<Image src="/images/palmita.png" width="88" height="50" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Table className={classes.table} >
						<TableHead>
						<TableRow>
							<TableCell>{"Nombre"}</TableCell>
							<TableCell align="right">{"Confirmación"}</TableCell>
						</TableRow>
						</TableHead>
						<TableBody>
						{data?.map((row) => (
							<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.confirm === "yes"? <CheckIcon style={{color: "green"}}/>:<ClearIcon style={{color: "red"}}/>}</TableCell>
							</TableRow>
						))}
						</TableBody>
					</Table>
				</Grid>
			</Grid>
		</Container>
		<Container>
		</Container>
	</Layout>
}
