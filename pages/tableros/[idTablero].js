import React from "react";
import { useRouter } from "next/router";

export default function Tablero() {
  const router = useRouter();
  const { idTablero } = router.query;

  return <div>Tablero: {idTablero}</div>;
}
