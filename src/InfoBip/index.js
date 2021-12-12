'use strict'

const decorator = {
  get (target, property) {
    const construct = target.constructor
    if (property === 'fake') {
      return construct['engageMock'].bind(construct)
    }
    if (property === 'restore') {
      return construct['disengageMock'].bind(construct)
    }
    if (property === 'withError') {
      return construct['respondWithError'].bind(construct)
    }
    if (property === 'withoutError') {
      return construct['respondWithoutError'].bind(construct)
    }
    if (property === 'mockMacro') {
      return construct['mockMacro'].bind(construct)
    }
    if (property === 'disengageMock' || property === 'engageMock') {
      return undefined
    }

    if (typeof target[property] === 'function') {
      return target[property].bind(target)
    }

    return property === '_mock' ? null : target[property]
  },
  set (target, property, value) {
    if (property === '_mock' || property === 'version') {
      throw new Error(
        'Adonis Infobip: Cannot set property from outside private space'
      )
    }
    target[property] = value
    return true
  }
}

class InfoBipApiClient {
  constructor (Agent, Config, Env) {
    const isProd = (Env.get('NODE_ENV') === 'production')
    const agent = new Agent(Config.get('infobip.apiKey'), isProd, {
      authType: Config.get('infobip.authType'),
      username: Config.get('infobip.username'),
      password: Config.get('infobip.password'),
      encrypted: Config.get('infobip.encrypted'),
      baseHost: Config.get('infobip.baseUrl')
    })

    /* @HINT: 
            Here i make use of JavaScript proxy to access the mock interface using an adapter similar to that
            exposed by AdonisJS in it's service objects. using 'fake()' and 'restore()'
    */
    /* @CHECK: For more info on JavaScript proxy, See: https://www.javascripttutorial.net/es6/javascript-proxy/ */
    return new Proxy(agent, decorator)
  }
}

module.exports = InfoBipApiClient
