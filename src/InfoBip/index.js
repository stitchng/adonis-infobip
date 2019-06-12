'use strict'

class InfoBipApiClient {

    constructor(Agent, Config, Env){

        let isProd = (Env.get('NODE_ENV') === "production")
        this.agent = new Agent(Config.get('infobip.apiKey'), isProd, {
            authType: Config.get('infobip.authType'), 
            username: Config.get('infobip.username'), 
            password: Config.get('infobip.password')
        })
    }
}

module.exports = InfoBipApiClient