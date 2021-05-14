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

    return new Proxy(agent, decorator)
  }
}

module.exports = InfoBipApiClient
