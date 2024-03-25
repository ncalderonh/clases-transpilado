# Descripción del Desafío - Programación Orientada a Objetos y ES6

En este desafío, se busca validar los conocimientos de Programación Orientada a Objetos y ES6 mediante la creación de un sistema para la empresa XYZ Consultores. Este sistema permitirá registrar la información de los clientes y calcular el impuesto anual que cada cliente debe pagar, utilizando las nuevas tecnologías de JavaScript.

## Archivos del Proyecto

El proyecto estará compuesto por tres archivos JavaScript:

1. **Cliente.js**: Este archivo define la clase `Cliente`, que representa a cada cliente de la empresa. Contiene métodos para establecer y obtener el nombre, el monto bruto anual y las deducciones de cada cliente.

2. **CalculadoraImpuestos.js**: Aquí se encuentra la clase `CalTax`, que proporciona un método estático para calcular el impuesto total que debe pagar un cliente, según su monto bruto anual y deducciones.

3. **Main.js**: Este archivo es el punto de entrada principal del programa. Aquí se crean instancias de clientes, se calcula el impuesto total para cada uno y se muestra en la consola.

## Transpilación con Babel

Para garantizar la compatibilidad del código con navegadores antiguos, se utiliza Babel para transpilar el código de ES6 a ES5. Aquí se explica el proceso:

1. **Instalación de Babel y Presets**: Se instalan Babel CLI y los presets necesarios para transpilar el código ES6 a ES5.

2. **Configuración de Babel**: Se crea el archivo `babel.config.json` en la raíz del proyecto para configurar Babel y especificar los presets a utilizar.

3. **Transpilación del Código**: Se ejecuta Babel desde la terminal para transpilar el archivo `Main.js` a ES5. El archivo transpilado se guarda como `Main-transpilado.js`.

Este flujo de trabajo asegura que el código desarrollado con las nuevas características de ES6 sea compatible con una amplia gama de navegadores y entornos de ejecución.

