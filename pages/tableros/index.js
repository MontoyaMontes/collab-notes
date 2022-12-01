import { Button } from "@material-ui/core";
import { Router } from "next/router";
import { useRouter } from "next/router";

export default function Tablero() {
  const router = useRouter();

  const handleClickBoard = (board) => {
    router.push({
      pathname: `/tableros/${123}`,
    });
  };
  return (
    <div>
      {/* Aqui se hace un map de los tablero dentro de un grid de material ui responsivo */}
      <Button variant="outlined" onClick={() => handleClickBoard("123")}>
        Click para ir a tablero 123
      </Button>
    </div>
  );
}
