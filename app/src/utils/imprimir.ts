import { Imprimivel } from "./imprimivel.js";

export function imprimir(...args: Imprimivel[]) {
  args.forEach((objeto) => objeto.paraTexto());
}
