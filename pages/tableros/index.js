import {
  Button,
  FormControl,
  Icon,
  alpha,
  InputBase,
  InputLabel,
  withStyles,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Grid,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Image from "next/image";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";

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
  const router = useRouter();
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    setBoards(["1", "dos", "otro"]);
  }, []);

  const handleOpenNew = () => {
    setOpenAdd(!openAdd);
  };

  const handleAddBoard = () => {
    setBoards((boards) => [...boards, newBoardName]);
    setNewBoardName("");
  };

  const handleClickBoard = (board) => {
    router.push({
      pathname: `/tableros/${board}`,
    });
  };

  return (
    <DashboardStyle>
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
            // onClick={handleReturn}
          >
            {/* <IconButton color="primary" aria-label="return" component="span">
              <ArrowBackIcon fontSize="large" style={{ color: { color1 } }} />
            </IconButton> */}
          </Button>

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
              src={"/img/ThinkDesign pequeño.png"}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container>
        {boards.map((currentBoard, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            onClick={() => handleClickBoard(currentBoard)}
          >
            <div class="letter">
              <div>
                Nombre del tablero: <b>{currentBoard}</b>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      {/* <div style={{ display: "grid" }}> */}

      {/* </div> */}

      <div className="add_button">
        <IconButton
          className="add_icon"
          variant="contained"
          color="primary"
          onClick={handleOpenNew}
        >
          <Add />
        </IconButton>
      </div>

      {openAdd && (
        <div className="options_container">
          <InputLabel shrink htmlFor="bootstrap-input">
            Nombre del nuevo tablero
          </InputLabel>

          <FormControl style={{ marginBottom: "1em" }}>
            <BootstrapInput
              value={newBoardName}
              onChange={(e) => setNewBoardName(e.target.value)}
              id="bootstrap-input"
              placeholder="Nuevo tablero"
            />
          </FormControl>
          <div></div>
          <Button
            variant="outlined"
            style={{ alignItems: "center", backgroundColor: "#ece5ce" }}
            onClick={handleAddBoard}
          >
            Agregar
          </Button>
        </div>
      )}

      <footer className="footer">
        <h3>
          CollabNotes
          <i> by </i>
          ThinkDesign
        </h3>
      </footer>
    </DashboardStyle>
  );
}

const DashboardStyle = styled.div`
  .letter {
    background: #fafafa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3),
      0 0 300px 25px rgba(222, 198, 122, 0.7) inset;
    width: 250px;
    height: 250px;
    margin: 2em;
    /* margin: 1.5% 50% auto; */
    /* left: -225px; */
    padding: 24px;
    position: relative;
    cursor: pointer;
  }

  .letter:before,
  .letter:after {
    content: "";
    background: #fafafa;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2),
      inset 0 0 300px rgba(222, 198, 122, 0.7);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -2;
    transition: 0.5s;
  }

  .letter:before {
    left: -5px;
    top: 2px;
    transform: rotate(-1.5deg);
  }

  .letter:after {
    right: -3px;
    top: 0px;
    transform: rotate(2.4deg);
  }

  .letter:hover:before {
    transform: rotate(0deg);
    border: solid rgba(111, 99, 61, 0.4);
    border-width: 0px 0px 0px 1px;
    left: -6px;
    top: -6px;
  }

  .letter:hover:after {
    transform: rotate(0deg);
    border: solid rgba(111, 99, 61, 0.4);
    border-width: 0px 0px 0px 1px;
    right: 3px;
    top: -3px;
  }

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    /* justify-content: center; */
    align-items: center;
    position: fixed;
    bottom: 0;
  }

  .options_container {
    position: fixed;
    /* width: 60px;
    height: 60px; */
    padding: 1em;
    bottom: 120px;
    right: 40px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 3px #999;
  }

  .add_button {
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 40px;
    background-color: #ece5ce;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
  }

  .add_icon {
    position: relative;
    top: 5%;
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
  }

  .footer h3 {
    margin: 0;
    /* line-height: 1.15; */
    /* font-size: 1.5rem; */
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .footer i {
    color: red;
    /*Cambiar por color de app**/
    line-height: 0.15;
    font-size: 1rem;
  }
`;
