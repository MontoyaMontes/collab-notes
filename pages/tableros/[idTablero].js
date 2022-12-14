import React, { useState } from "react";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import styles from "../../styles/Tablero.module.css";

import { makeStyles } from "@material-ui/core/styles";
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

import { Grid, Typography } from "@material-ui/core";

export default function Tablero() {

  const [open, setOpen] = React.useState(false);

  const handleCloseDessagree = () => {
    setOpen(false);
  };

  const handleCloseAgree = () => {
    router.push({
      pathname: `/`,
    });
  };

  const handleEndSession = (board) => {
    setOpen(true);
  };

  const color1 = "#774F38";
  const color2 = "#FFE184";
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mode, setMode] = useState("");

  const height = 600;
  const width = 800;

  const router = useRouter();
  const { idTablero } = router.query;

  const saveImage = () => {
    const canvas = document.querySelector("#canvasBase");

    var image = canvas
      .toDataURL("image/png.png")
      .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

    window.location.href = image; // it will save locally
  };

  const handleReturn = () => {
    router.push("/tableros/");
  };

  const handleZoomIn = () => {
    console.log("ZommIn");
  };

  const handleZoomOut = () => {
    console.log("ZommOut");
  };

  const handleLeft = () => {
    console.log("Left");
  };

  const handleRight = () => {
    console.log("Right");
  };

  const handleShare = () => {
    console.log("Share");
    setMode("share");
  };

  const handleEdit = () => {
    setMode("draw");
  };

  const stopDrawing = () => {
    console.log("StopDRAW");
    setIsMouseDown(false);
  };

  const startDrawing = (event) => {
    console.log("StartDraw");
    if (mode === "draw") {
      setIsMouseDown(true);
      setX(event.nativeEvent.offsetX);
      setY(event.nativeEvent.offsetY);
      // [x, y] = [event.nativeEvent.offsetX, event.nativeEvent.offsetY];
    }
  };

  const drawLine = (event) => {
    if (isMouseDown) {
      const canvas = document.querySelector("#canvasBase");
      const context = canvas.getContext("2d");
      context.lineWidth = 1;
      const newX = event.nativeEvent.offsetX;
      const newY = event.nativeEvent.offsetY;
      context.beginPath();
      console.log("x : " + x + " y: " + y + " nx: " + newX + " ny: " + newY);
      console.log(event);
      context.moveTo(x, y);
      context.lineTo(newX, newY);
      context.stroke();
      setX(newX);
      setY(newY);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: "#C5E0DC", maxHeight: "90vh" }}
    >
      <Head>
        <title>Edici??n - Tablero {idTablero}</title>
        <meta name="description" content="Tablero colaborativo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar
        position="static"
        style={{
          backgroundColor: "#FFF",
          color: "black",
          paddingLeft: "100px",
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <Toolbar>
        <Button
            edge="start"
            variant="text"
            color="primary"
            onClick={handleEndSession}
          >
              <IconButton color="primary" aria-label="return" component="span">
              <ExitToAppIcon fontSize="large" style={{ color: { color1 } }} />
            </IconButton>
          </Button>

          <Button
            edge="start"
            variant="text"
            color="primary"
            onClick={handleReturn}
          >
            <ArrowBackIcon fontSize="large" style={{ color: { color1 } }} />
          </Button>
          <Box style={{ paddingLeft: "5%" }}>
            <Typography variant="h4">
              Tablero: <b>{idTablero}</b>
            </Typography>
          </Box>
          <Box
            edge="end"
            style={{
              marginTop: "1em",
              marginLeft: "auto",
              paddingRight: "5%",
            }}
          >
            <Image
              width={260}
              height={60}
              alt="logoThinkDesign"
              src={"/img/ThinkDesign peque??o.png"}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container justifyContent="center" item xs={12}>
        <Grid
          container
          style={{
            marginTop: "2%",
            backgroundColor: "#FFF",
            borderRadius: 20,
            border: "1px solid #774F38",
          }}
          justifyContent="space-around"
          item
          xs={7}
        >
          <div>
            <Button onClick={handleZoomIn}>
              <ZoomInIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>
            <Button onClick={handleZoomOut}>
              <ZoomOutIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>
          </div>
          <div>
            <Button onClick={handleLeft}>
              <ArrowLeftIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>
            <Button>
              <DescriptionIcon
                fontSize="large"
                style={{
                  color: { color1 },
                }}
              />
            </Button>
            <Button onClick={handleRight}>
              <ArrowRightIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>
          </div>

          <Button onClick={saveImage}>
            <ShareIcon fontSize="large" style={{ color: { color1 } }} />
          </Button>
        </Grid>

        <Grid
          style={{
            display: "flex",
            marginTop: "2%",
            maxHeight: "100%",
            justifyContent: "center",
          }}
          item
          xs={12}
        >
          <canvas
            id="canvasBase"
            width={width}
            height="550%"
            // width: 100%;
            style={{ backgroundColor: "#FFF" }}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={drawLine}
          />
        </Grid>

        <Grid
          container
          style={{
            marginTop: "2%",
            backgroundColor: "#FFF",
            borderRadius: 20,
            border: "1px solid #774F38",
          }}
          item
          xs={7}
          justifyContent="center"
        >
          <Grid
            container
            style={{ margin: "1%" }}
            justifyContent="space-around"
            item
            xs={12}
          >
            <Button
              variant={mode == "undo" ? "contained" : "outlined"}
              size="small"
              style={
                mode == "draw"
                  ? { borderRadius: 25, backgroundColor: { color1 } }
                  : { borderRadius: 25, backgroundColor: { color2 } }
              }
              onClick={() => setMode("undo")}
            >
              <UndoIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>

            <Button
              variant={mode == "redo" ? "contained" : "outlined"}
              size="small"
              style={
                mode == "draw"
                  ? { borderRadius: 25, backgroundColor: { color1 } }
                  : { borderRadius: 25, backgroundColor: { color2 } }
              }
              onClick={() => setMode("redo")}
            >
              <RedoIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>

            <Button
              variant={mode == "select" ? "contained" : "outlined"}
              size="small"
              style={{ borderRadius: 25, backgroundColor: { color2 } }}
              onClick={() => setMode("pan")}
            >
              <PanToolIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>
            <Button
              variant={mode == "mouse" ? "contained" : "outlined"}
              size="small"
              style={
                mode == "draw"
                  ? { borderRadius: 25, backgroundColor: { color1 } }
                  : { borderRadius: 25, backgroundColor: { color2 } }
              }
              onClick={() => setMode("mouse")}
            >
              <MouseIcon fontSize="large" style={{ color: { color1 } }} />
            </Button>

            <Button
              variant={mode == "backspace" ? "contained" : "outlined"}
              size="small"
              style={
                mode == "draw"
                  ? { borderRadius: 25, backgroundColor: { color1 } }
                  : { borderRadius: 25, backgroundColor: { color2 } }
              }
              onClick={() => setMode("backspace")}
            >
              <BackSpaceIcon
                fontSize={false ? "large" : "small"}
                style={{ color: { color1 } }}
              />
            </Button>

            <Button
              variant={mode == "draw" ? "contained" : "outlined"}
              size="small"
              style={
                mode == "draw"
                  ? { borderRadius: 25, backgroundColor: { color1 } }
                  : { borderRadius: 25, backgroundColor: { color2 } }
              }
              onClick={handleEdit}
            >
              <CreateIcon
                fontSize={mode == "draw" ? "small" : "large"}
                style={
                  mode == "draw" ? { color: { color2 } } : { color: { color1 } }
                }
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <footer
        className={styles.footer}
        style={{ position: "fixed", bottom: "0" }}
      >
        <h3>
          CollabNotes
          <i> by </i>
          ThinkDesign
        </h3>
      </footer>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <Typography variant="h3" align="center" style={{ color:"#774F38", marginBottom:0 }}>
          ????ATENCI??N!!
        </Typography>
          <h2 ></h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography variant="h4" align="center">
          Esta apunto de cerrar la sesi??n
          </Typography>
          <Typography variant="h4"  align="center">
            ??Desea continuar?
          </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center", padding:30 }}>
          <Button 
            variant="contained"
            color="secondary" 
            onClick={handleCloseDessagree}>Cancelar</Button>
          <Button
            variant="contained"
            color="primary" 
             onClick={handleCloseAgree} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>

      <Script src="/js/tablero.js" strategy="lazyOnload " />
    </div>
  );
}
