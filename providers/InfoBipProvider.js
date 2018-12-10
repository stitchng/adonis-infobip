'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class InfoBipProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/InfoBip', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const InfoBipHelper = require('../src/InfoBip')
      return new InfoBipHelper(require('got'), require('lodash'), Config)
    })
  }
}

module.exports = InfoBipProvider
