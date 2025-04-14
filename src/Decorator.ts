export function TempoDeExecucao(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const inicio = performance.now();
    const resultado = metodoOriginal.apply(this, args);
    const fim = performance.now();

    console.log(`Tempo de execução de ${propertyKey}: ${(fim - inicio).toFixed(2)} ms`);

    return resultado;
  };

  return descriptor;
}