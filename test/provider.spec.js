'use strict'

/*
 * adonis-infobip
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { ioc } = require('@adonisjs/fold')
const { Config, Env } = require('@adonisjs/sink')
const InfoBipProvider = require('../providers/InfoBipProvider.js')

let InfoBipInstance = null

test.group('AdonisJS InfoBipProvider Test(s)', (group) => {
  group.beforeEach(() => {
    ioc.bind('Adonis/Src/Config', () => {
      let config = new Config()
      config.set('infobip.encrypted', false)
      config.set('infobip.authType', 'basic')
      config.set('infobip.username', 'regency')
      config.set('infobip.password', '_38399abci')
      config.set('infobip.apiKey', 'YWdJm94f8a309e09349ebc8e4eC')
      config.set('infobip.baseUrl', 'okllqa.api.infobip.com')

      return config
    })

    ioc.bind('Env', () => {
      let env = new Env()

      env.set('NODE_ENV', 'development')

      return env
    })
  })

  test('instantiate without errors or side-effects [infobip]', (assert) => {
    const provider = new InfoBipProvider(ioc)
    provider.register()

    InfoBipInstance = ioc.use('Adonis/Addons/InfoBip')

    assert.isTrue(typeof InfoBipInstance.sendSMS === 'function')
    assert.isTrue(typeof InfoBipInstance.sendSMSBinary === 'function')
    assert.isTrue(typeof InfoBipInstance.sendVoice === 'function')
  })
})
