'use strict'

const numeroValido = (numero) => {
    const isNumber = Number.isInteger(numero)

    if (!isNumber) {
        return false
    }

    const sinal = Math.sign(numero)

    if (sinal === -1) {
        return false
    }

    return true
}

module.exports = {
    numeroValido
  }