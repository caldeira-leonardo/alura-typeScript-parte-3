import { Imprimivel } from "../utils/imprimivel.js";

export interface INegociacoesDoDiaProps {
  // botão direito > renomear valor
  // altera todas as utilizações dessa prop na aplicação
  montante: number;
  vezes: number;
}

export interface Comparavel<T> {
  ehIgual(objeto: T): boolean;
}

export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
