import { listarLugares, buscarPersonaje, inventarioConFrases, poderTotalInventario, agruparObjetosPorCategoria } from "./functions";

const main = (): void => {
  const opcion: number = 6;
 
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "Sabio";
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  }
};

main();