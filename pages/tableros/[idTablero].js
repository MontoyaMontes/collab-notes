import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import styles from "../../styles/Tablero.module.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowLeftIcon from "@material-ui/icons/ArrowBackIos";
import ArrowRightIcon from "@material-ui/icons/ArrowForwardIos";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ShareIcon from "@material-ui/icons/Share";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import RedoIcon from "@material-ui/icons/RedoRounded";
import UndoIcon from "@material-ui/icons/UndoRounded";
import PanToolIcon from "@material-ui/icons/PanToolRounded";
import MouseIcon from "@material-ui/icons/Mouse";
import BackSpaceIcon from "@material-ui/icons/Backspace";
import CreateIcon from "@material-ui/icons/Create";

import {
  alpha,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Description } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 1 auto"
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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

export default function Tablero() {
  const height = 768;
  const width = 1366;

  const [spacing, setSpacing] = React.useState(2);
  const router = useRouter();
  const classes = useStyles();
  const { idTablero } = router.query;

  const handleReturn = () => {
    router.push("/tableros/");
  };

  const handleZoomIn = () => {
    console.log('ZommIn');
  };

  const handleZoomOut = () => {
    console.log('ZommOut');
  };

  const handleLeft = () => {
    console.log('Left');
  };

  const handleRight = () => {
    console.log('Right');
  };

  const handleShare = () => {
    console.log('SHare');
  };


  let x = 0, y = 0;
  let isMouseDown = false;
  
  const stopDrawing = () => { console.log('StopDRAW'); isMouseDown = false; }
  const startDrawing = event => {
    console.log('StartDraw');
    isMouseDown = true;   
    [x, y] = [event.nativeEvent.offsetX, event.nativeEvent.offsetY];
  }
  const drawLine = event => {
    if ( isMouseDown ) {
      const canvas = document.querySelector("#canvasBase");
      const context = canvas.getContext("2d");
      context.lineWidth = 1;
      const newX = event.nativeEvent.offsetX;
      const newY = event.nativeEvent.offsetY;
      context.beginPath();
      console.log("x : " + x + " y: " + y + " nx: " + newX + " ny: " + newY );
      console.log(event);
      context.moveTo(x,y);
      context.lineTo(newX,newY);
      context.stroke();
      x = newX;
      y = newY;
    }
}

  return (
    <>
  <div className={styles.container} style={{backgroundColor: "#E08E79", padding: 0}}>
      <Head>
        <title>Edición - Tablero { idTablero }</title>
        <meta name="description" content="Tablero colaborativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar 
        position="static"
        style={{
          backgroundColor: "#FFF", 
          color: "black", 
          paddingLeft: "100px",
          boxShadow: "0px 0px 0px 0px" }}>
        <Toolbar>
          <Button edge="start" variant="text" color="primary" onClick={handleReturn}>
            <IconButton color="primary" aria-label="return" component="span">
              <ArrowBackIcon fontSize="large" style={{color: "#774F38"}} />
            </IconButton>
          </Button>
          <Box style={{ paddingLeft: "5%" }}>
            <Typography variant="h4">Tablero { idTablero }</Typography>
          </Box>
          <Box edge="end" style={{ marginLeft: "auto", paddingRight: "5%" }}>
            <Image width={width*0.2} height={height*0.1} alt="logoThinkDesign" src={"/img/ThinkDesign pequeño.png"}></Image>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid justifyContent="center" container item xs={12}>
        <Grid container style={{marginTop: "2%", backgroundColor: "#FFF", borderRadius: 20 }} justifyContent="center" item xs={8}>
          <Grid container item xs={4} justifyContent="flex-start">
            <Button onClick={handleZoomIn}>
              <IconButton color="primary" aria-label="zoomIn" component="span">
                <ZoomInIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button onClick={handleZoomOut}>
              <IconButton color="primary" aria-label="zoomOut" component="span">
                <ZoomOutIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
          </Grid>
          <Grid container item xs={4} justifyContent="center">
            <Button onClick={handleLeft} >
              <IconButton color="primary" aria-label="left" component="span">
                <ArrowLeftIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button>
              <IconButton color="primary" aria-label="left" component="span">
                <DescriptionIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button onClick={handleRight}>
              <IconButton color="primary" aria-label="right" component="span">
                <ArrowRightIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
          </Grid>
          <Grid container item xs={4} justifyContent="flex-end">
            <Button onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <ShareIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
        
        <Grid container style={{marginTop: "2%", maxHeight:"100%", backgroundColor: "#FFF"}} justifyContent="center" item xs={10}>
          <canvas id="canvasBase" style={{width: width*0.5, height: height*0.5}}
            onMouseDown={startDrawing} 
            onMouseUp={stopDrawing} 
            onMouseOut={stopDrawing}
            onMouseMove={drawLine}></canvas>
        </Grid>

        <Grid container style={{marginTop: "2%", backgroundColor: "#FFF", borderRadius: 20 }} item xs={7} justifyContent="center">
          <Grid container style={{margin: "1%"}} justifyContent="space-around" item xs={12}>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#FFE184"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <UndoIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#FFE184"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <RedoIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#FFE184"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <PanToolIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#C5E0DC"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <MouseIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#FFE184"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <BackSpaceIcon fontSize="large" style={{color: "#774F38"}} />
              </IconButton>
            </Button>
            <Button variant="contained" size="small" style={{borderRadius: 25, backgroundColor:"#FFE184"}} onClick={handleShare}>
              <IconButton color="primary" aria-label="share" component="span">
                <CreateIcon fontSize="large" style={{color: "#774F38"}}/>
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <footer className={styles.footer}>
        <h3>
          CollabNotes
          <i> by </i>
          ThinkDesign
        </h3>
      </footer>
    </div>
    <Script src="/js/tablero.js" strategy="lazyOnload "/>
    </>
    );  
}