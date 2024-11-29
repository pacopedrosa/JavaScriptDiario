export function sistemaBancario(saldoInicial) {
    let saldo = saldoInicial;

    this.depositar = function (cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
            return `Depósito realizado con éxito. Saldo actual: $${saldo}`;
        }
        return "La cantidad a depositar debe ser mayor a 0.";
    };

    this.retirar = function (cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
            return `Retiro realizado con éxito. Saldo actual: $${saldo}`;
        }
        return "No se puede realizar el retiro. Saldo insuficiente o cantidad inválida.";
    };

    this.obtenerSaldo = function () {
        return `Saldo actual: $${saldo}`;
    };
}