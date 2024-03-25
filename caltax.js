// CalTax.js
class CalculadoraImpuestos {
    static calcularImpuestoTotal(cliente) {
        const impuestoTotal = (cliente.getMontoBrutoAnual() - cliente.getDeducciones()) * 0.21;
        return impuestoTotal;
    }
}

export default CalculadoraImpuestos;
