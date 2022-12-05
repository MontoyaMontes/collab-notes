import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import {
  alpha,
  FormControl,
  InputBase,
  InputLabel,
  withStyles,
} from "@material-ui/core";
import { useState } from "react";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [incorrectUser, setIncorrectUser] = useState(false)

  const handleLogin = () => {
    if(user === "prueba" && password === "prueba"){
          router.push("/tableros/");
    }else{
      setIncorrectUser(true)
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>CollabNotes</title>
        <meta name="description" content="CollabNotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AppBar
          position="static"
          style={{
            backgroundColor: "#FFF",
            color: "black",
            paddingLeft: "100px",
            marginBottom: "2%",
            paddingTop: "1%",
            boxShadow: "0px 0px 0px 0px",
          }}
        >
          <Toolbar>
            <Box edge="end" style={{ marginLeft: "auto", paddingRight: "5%" }}>
              <Image
                width="350"
                height="100"
                alt="logoThinkDesign"
                src={"/img/ThinkDesign pequeño.png"}
              />
            </Box>
          </Toolbar>
        </AppBar>


      <Grid justifyContent="center" container item xs={12}>
        <Grid justifyContent="center" container item xs={6} style={{backgroundColor: "#E08E79"}}>
        <main className={styles.main} style={{paddingTop: "0"}}>
          <Image
                width="350"
                height="350"
                alt="collabNotesLogo"
                src={"/img/CollabNote pequeño.png"}
              />
              <Box >
                <Typography variant="h3">CollabNotes </Typography>
              </Box>
              </main>
        </Grid>
        <Grid justifyContent="center" container item xs={6}>
          <main className={styles.main} style={{paddingTop: "0"}}>
          <h3 className={styles.title}>Iniciar sesión</h3>

          <div className={styles.data}>
            {incorrectUser && <label style={{color:"red"}}>Usuario o contraseña incorrectas</label>}
            <FormControl style={{marginBottom: "2em"}}>
              <InputLabel shrink htmlFor="bootstrap-input">
                Usuario o email
              </InputLabel>
              <BootstrapInput value={user} onChange={e => setUser(e.target.value)} id="bootstrap-input" placeholder="Contraseña" />
            </FormControl>

            <FormControl>
              <InputLabel shrink htmlFor="bootstrap-input">
                Contraseña
              </InputLabel>
              <BootstrapInput type="password" value={password} onChange={e => setPassword(e.target.value)} id="bootstrap-input" placeholder="Contraseña" />
            </FormControl>
          </div>

          <div className={styles.btn_login}>
            <Button variant="outlined" color="primary" onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </div>
          
        </main>
        </Grid>
      </Grid>

      <footer className={styles.footer} style={{position: "fixed", bottom: 0}}>
        <h3>
          CollabNotes
          <i> by </i>
          ThinkDesign
        </h3>
      </footer>
    </div>
  );
}
