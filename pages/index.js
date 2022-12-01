import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

import {
  alpha,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  withStyles,
} from "@material-ui/core";

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

  const handleLogin = () => {
    router.push("/tableros/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrate </h1>
        <h1 className={styles.title}> o </h1>
        <h1 className={styles.title}>inicia sesión</h1>

        <div className={styles.data}>
          <FormControl>
            <InputLabel shrink htmlFor="bootstrap-input">
              Uusuario o email
            </InputLabel>
            <BootstrapInput id="bootstrap-input" placeholder="Contraseña" />
          </FormControl>

          <FormControl>
            <InputLabel shrink htmlFor="bootstrap-input">
              Contraseña
            </InputLabel>
            <BootstrapInput id="bootstrap-input" placeholder="Contraseña" />
          </FormControl>
        </div>

        <div className={styles.btn_login}>
          <Button variant="outlined" color="primary" onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>
          CollabNotes
          <i> by </i>
          ThinkDesign
        </h3>
      </footer>
    </div>
  );
}
