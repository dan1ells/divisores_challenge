'use strict'

class DivisorService {


    async calculaDivisores(num){
        const divisores = []
        let i = 1
        for (i; i <= num; i++) {
            let resto = num%i
            if (resto === 0) {
                divisores.push(i)
            }
        }
        const divisoresPrimos = []
        for (const cont in divisores) {
            let divisor = divisores[cont]
            let primo = await this.numeroPrimo(divisor)
            if (primo) {
                divisoresPrimos.push(divisor)
            }
        }
        return 'Número de Entrada: ' + num + ' \nNúmeros divisores ' + divisores + '\nDivisores Primos: ' + divisoresPrimos
    }

    async numeroPrimo(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

}

module.exports = DivisorService