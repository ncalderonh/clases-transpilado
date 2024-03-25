"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _caltax = _interopRequireDefault(require("./caltax.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Main.js

// Crea instancias de Cliente
var cliente1 = new _cliente["default"]('Juan', 50000, 10000);
var cliente2 = new _cliente["default"]('María', 80000, 15000);

// Calcula el impuesto total para cada cliente
var impuestoCliente1 = _caltax["default"].calcularImpuestoTotal(cliente1);
var impuestoCliente2 = _caltax["default"].calcularImpuestoTotal(cliente2);
console.log("El impuesto total para ".concat(cliente1.getNombre(), " es: ").concat(impuestoCliente1));
console.log("El impuesto total para ".concat(cliente2.getNombre(), " es: ").concat(impuestoCliente2));
