import { Button } from "@material-ui/core";
import { Router } from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Tablero() {
  const router = useRouter();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(["1", "dos", "otro"]);
  }, []);

  const handleClickBoard = (board) => {
    router.push({
      pathname: `/tableros/${board}`,
    });
  };

  return (
    <DashboardStyle>
      <div style={{ display: "flex" }}>
        {boards.map((currentBoard, index) => (
          <div key={index} onClick={() => handleClickBoard(currentBoard)}>
            <div class="letter">Nombre del tablero:{currentBoard}</div>
          </div>
        ))}
      </div>
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
`;
