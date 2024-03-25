// Cliente.js
class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
        this.nombre = nombre;
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    // Getters y setters
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getMontoBrutoAnual() {
        return this.montoBrutoAnual;
    }

    setMontoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual;
    }

    getDeducciones() {
        return this.deducciones;
    }

    setDeducciones(deducciones) {
        this.deducciones = deducciones;
    }
}

export default Cliente;
