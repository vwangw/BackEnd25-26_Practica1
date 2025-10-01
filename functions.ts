import {Personaje, Objeto} from "./types";
import {lugares, personajes, objetos} from "./datos"

export const listarLugares = (): void => {
  lugares.forEach((lugar): void => {
    console.log(lugar.nombre + " "+lugar.peligro);
  });
};

export const buscarPersonaje = (nombre: string): void => {
  const encontrados: Personaje[] = personajes.filter(
    (pj: Personaje): boolean => pj.nombre === nombre
  );

  if (encontrados.length > 0) {
    encontrados.forEach((pj: Personaje): void => {
      console.log(
        pj.nombre + "- Fuerza: " + pj.fuerza + ", " + (pj.aliado ? "Aliado" : "Enemigo")
      );
    });
  } else {
    console.log("No se encontró al personaje.");
  }
};


export const inventarioConFrases = (): string[] => {
  return objetos.map(
    (obj: Objeto): string =>
      obj.nombre + " (+" + obj.poder + " poder, categoría: " + obj.categoria + ")"
  );
};


export const agruparObjetosPorCategoria = () => {
  return objetos.reduce((acumulado: any, obj) => {
    acumulado[obj.categoria] = (acumulado[obj.categoria] || 0) + obj.poder;
    return acumulado;
  }, {});
};

export const poderTotalInventario = (): number => {
  return objetos.reduce((total, obj): number => total + obj.poder, 0);
};