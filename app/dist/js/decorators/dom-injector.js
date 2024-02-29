export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`modificando prototype ${target.constructor.name}`);
        console.log(`e adicionando getter para a propriedade ${propertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`buscando elemento do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
//# sourceMappingURL=dom-injector.js.map