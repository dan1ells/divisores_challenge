'use strict'

const DivisorService = use('App/Services/DivisorService')

class DivisorController {
    constructor() {
        this._divisorService = new DivisorService()
      }


    async calculaDivisores({ params }){
        const { num } = params
        const divisor = this._divisorService.calculaDivisores(num)

        return divisor
    }

}

module.exports = DivisorController
