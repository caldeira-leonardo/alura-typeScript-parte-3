export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    console.log(`modificando prototype ${target.constructor.name}`);
    console.log(`e adicionando getter para a propriedade ${propertyKey}`);
    let elemento: HTMLElement | null = null;

    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(selector) as HTMLElement;
        console.log(
          `buscando elemento do DOM com o seletor ${selector} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}
