'use strict'

const DivisorService = use('App/Services/DivisorService')
const AppException = use('App/Exceptions/AppException')
const { numeroValido } = use('App/Helpers')

class DivisorController {
    constructor() {
        this._divisorService = new DivisorService()
      }


    async calculaDivisores({ request }){
        const requestBody = request.only(["numero"]);
        const num = requestBody.numero

        const numberIsValid = numeroValido(num)
        if (!numberIsValid) {
            throw new AppException('Não foi digitado um número valido')
        }

        const divisor = this._divisorService.calculaDivisores(num)
        return divisor
    }

}

module.exports = DivisorController
