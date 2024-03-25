// Main.js
import Cliente from './cliente.js';
import CalculadoraImpuestos from './caltax.js';

// Creamos instancias de Cliente
const cliente1 = new Cliente('Juan', 50000, 10000);
const cliente2 = new Cliente('María', 80000, 15000);

// Calculamos el impuesto total para cada cliente
const impuestoCliente1 = CalculadoraImpuestos.calcularImpuestoTotal(cliente1);
const impuestoCliente2 = CalculadoraImpuestos.calcularImpuestoTotal(cliente2);

console.log(`El impuesto total para ${cliente1.getNombre()} es: ${impuestoCliente1}`);
console.log(`El impuesto total para ${cliente2.getNombre()} es: ${impuestoCliente2}`);
