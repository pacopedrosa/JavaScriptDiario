export class sistemaBancarioClases {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            return `Depósito realizado con éxito. Saldo actual: $${this.#saldo}`;
        }
        return "La cantidad a depositar debe ser mayor a 0.";
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            return `Retiro realizado con éxito. Saldo actual: $${this.#saldo}`;
        }
        return "No se puede realizar el retiro. Saldo insuficiente o cantidad inválida.";
    }

    obtenerSaldo() {
        return `Saldo actual: $${this.#saldo}`;
    }
}
