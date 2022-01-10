'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class InfoBipProvider extends ServiceProvider {
  /**
   * Register the API wrapper to the IoC
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.singleton('Adonis/Addons/InfoBip', () => {
      const Config = this.app.use('Adonis/Src/Config')
      const Env = this.app.use('Env')
      const InfoBipAPIClient = require('../src/InfoBip/index.js')

      return new InfoBipAPIClient(require('infobip-nodejs'), Config, Env)
    })

    this.app.alias('Adonis/Addons/InfoBip', 'InfoBip')
  }
}

module.exports = InfoBipProvider
