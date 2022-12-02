import React, { useState } from "react";

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

import {
  alpha,
  Grid,
  InputBase,
  Typography,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 1 auto",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Tablero() {
  const height = 560;
  const width = 1366;

  const [spacing, setSpacing] = React.useState(2);
  const router = useRouter();
  const classes = useStyles();
  const { idTablero } = router.query;

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
    console.log("SHare");
  };

  const handleEdit = () => {
    setDrawMode(!drawMode);
  };

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [drawMode, setDrawMode] = useState(false);

  const stopDrawing = () => {
    console.log("StopDRAW");
    setIsMouseDown(false);
  };

  const startDrawing = (event) => {
    console.log("StartDraw");
    if (drawMode) {
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
      // x = newX;
      // y = newY;
    }
  };

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: "#E08E79", padding: 0 }}
      >
        <Head>
          <title>Edición - Tablero {idTablero}</title>
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
              onClick={handleReturn}
            >
              <IconButton color="primary" aria-label="return" component="span">
                <ArrowBackIcon fontSize="large" style={{ color: "#774F38" }} />
              </IconButton>
            </Button>
            <Box style={{ paddingLeft: "5%" }}>
              <Typography variant="h4">Tablero {idTablero}</Typography>
            </Box>
            <Box edge="end" style={{ marginLeft: "auto", paddingRight: "5%" }}>
              <Image
                width={width * 0.2}
                height={height * 0.07}
                alt="logoThinkDesign"
                src={"/img/ThinkDesign pequeño.png"}
              />
            </Box>
          </Toolbar>
        </AppBar>

        <Grid justifyContent="center" container item xs={12}>
          <Grid
            container
            style={{
              marginTop: "2%",
              backgroundColor: "#FFF",
              borderRadius: 20,
            }}
            justifyContent="space-around"
            // justifyContent="center"
            item
            xs={7}
          >
            {/* <Grid container item xs={12} md={4} justifyContent="flex-start"> */}
            <div>
              <Button onClick={handleZoomIn}>
                {/* <IconButton
                  color="primary"
                  aria-label="zoomIn"
                  component="span"
                > */}
                <ZoomInIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
              <Button onClick={handleZoomOut}>
                {/* <IconButton */}
                {/* color="primary"
                  aria-label="zoomOut"
                  component="span"
                > */}
                <ZoomOutIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
            </div>
            <div>
              <Button onClick={handleLeft}>
                {/* <IconButton color="primary" aria-label="left" component="span"> */}
                <ArrowLeftIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
              <Button>
                {/* <IconButton color="primary" aria-label="left" component="span"> */}
                <DescriptionIcon
                  fontSize="large"
                  style={{
                    color: "#774F38",
                  }}
                />
                {/* </IconButton> */}
              </Button>
              <Button onClick={handleRight}>
                {/* <IconButton color="primary" aria-label="right" component="span"> */}
                <ArrowRightIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
            </div>
            {/* </Grid> */}
            {/* <Grid item xs={12} md={4} justifyContent="center"> */}

            {/* </Grid> */}
            {/* <Grid item xs={12} md={4} justifyContent="flex-end"> */}
            <Button onClick={handleShare}>
              {/* <IconButton color="primary" aria-label="share" component="span"> */}
              <ShareIcon fontSize="large" style={{ color: "#774F38" }} />
              {/* </IconButton> */}
            </Button>
            {/* </Grid> */}
          </Grid>

          <Grid
            style={{
              display: "flex",
              marginTop: "2%",
              // maxHeight: "100%",
              // backgroundColor: "#FFF",
              // width: "100hw",
              // height: "100hw",
              justifyContent: "center",
            }}
            justifyContent="center"
            item
            xs={12}
          >
            <canvas
              id="canvasBase"
              width={width}
              height={height}
              style={{ backgroundColor: "#FFF" }}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onMouseMove={drawLine}
            />
          </Grid>

          <Grid
            style={{
              marginTop: "2%",
              backgroundColor: "#FFF",
              borderRadius: 20,
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
                variant="contained"
                size="small"
                style={{ borderRadius: 25, backgroundColor: "#FFE184" }}
                onClick={handleShare}
              >
                {/* <IconButton color="primary" aria-label="share" component="span"> */}
                <UndoIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ borderRadius: 25, backgroundColor: "#FFE184" }}
                onClick={handleShare}
              >
                {/* <IconButton color="primary" aria-label="share" component="span"> */}
                <RedoIcon fontSize="large" style={{ color: "#774F38" }} />
                {/* </IconButton> */}
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ borderRadius: 25, backgroundColor: "#FFE184" }}
                onClick={handleShare}
              >
                <PanToolIcon fontSize="large" style={{ color: "#774F38" }} />
              </Button>
              <Button
                variant="contained"
                size="small"
                // style= {drawMode ?
                // {{ borderRadius: 25, backgroundColor:  "#C5E0DC" }}  : {{ borderRadius: 25, backgroundColor:"#FFE184" }}}

                onClick={handleShare}
              >
                <MouseIcon fontSize="large" style={{ color: "#774F38" }} />
              </Button>

              <Button
                variant="contained"
                size="small"
                style={{ borderRadius: 25, backgroundColor: "fff" }}
                onClick={handleShare}
              >
                <BackSpaceIcon
                  fontSize={false ? "large" : "small"}
                  style={{ color: "#774F38" }}
                />
              </Button>

              <Button
                variant={drawMode ? "contained" : "outlined"}
                size="small"
                style={
                  drawMode
                    ? { borderRadius: 25, backgroundColor: "#FFE184" }
                    : { borderRadius: 25, backgroundColor: "#774F38" }
                }
                onClick={handleEdit}
              >
                <CreateIcon
                  fontSize={drawMode ? "large" : "small"}
                  style={drawMode ? { color: "#774F38" } : { color: "#FFE184" }}
                />
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
      <Script src="/js/tablero.js" strategy="lazyOnload " />
    </>
  );
}
