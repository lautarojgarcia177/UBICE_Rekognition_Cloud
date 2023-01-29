import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function startUp() {
  // TODO Verificar que esten las credenciales cargadas
}

export default function App() {
  const toast = useToast();
  useEffect(() => startUp(), []);
  return <Outlet />;
}
