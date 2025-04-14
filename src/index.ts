import { TempoDeExecucao } from "./Decorator";

class Exemplo {

  @TempoDeExecucao
  calcularAlgoPesado() {
    for (let i = 0; i < 1e7; i++) {} // operação pesada
  }

}

const teste = new Exemplo();
teste.calcularAlgoPesado();