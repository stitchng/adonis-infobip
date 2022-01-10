'use strict'

const Env = use('Env')

module.exports = {
  /*
  |---------------------------------------------------------------------------
  | Using SSL ?
  |---------------------------------------------------------------------------
  |
  | Whether or not the API request should be encrypted vis SSL
  |
  |
  */
  encrypted: false,

  /*
  |--------------------------------------------------------------------------
  | Username
  |--------------------------------------------------------------------------
  |
  | The username of the infobip portal dashboad account
  |
  */
  username: Env.get('INFOBIP_USERNAME'),

  /*
  |--------------------------------------------------------------------------
  | Password
  |--------------------------------------------------------------------------
  |
  | The password of the infobip portal dashboad account
  |
  */
  password: Env.get('INFOBIP_PASSWORD'),

  /*
  |---------------------------------------------------------------------------
  | Api Key
  |---------------------------------------------------------------------------
  |
  | This refers to the API key from the infobip protal dashboard account
  |
  |
  */
  apiKey: Env.get('INFOBIP_API_KEY'),

  /*
  |---------------------------------------------------------------------------
  | Auth Type
  |---------------------------------------------------------------------------
  |
  | This refers to the authorization type used to access the API service.
  | two options:
  |
  | basic, key
  |
  */
  authType: Env.get('INFOBIP_AUTH_TYPE', 'basic'),

  /*
  |---------------------------------------------------------------------------
  | Base Host
  |---------------------------------------------------------------------------
  |
  | This is the base host (not url)
  |
  |
  */
  baseUrl: Env.get('INFOBIP_BASE_URL', 'api.infobip.com')

}
