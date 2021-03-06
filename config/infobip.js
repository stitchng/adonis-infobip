'use strict'

const Env = use('Env')

module.exports = {
  /*
  |---------------------------------------------------------------------------
  | Using SSL ?
  |---------------------------------------------------------------------------
  |
  |
  |
  |
  */
  encrypted: true,

  /*
  |--------------------------------------------------------------------------
  | Username
  |--------------------------------------------------------------------------
  |
  |
  |
  */
  username: Env.get('INFOBIP_USERNAME'),

  /*
  |--------------------------------------------------------------------------
  | Password
  |--------------------------------------------------------------------------
  |
  |
  |
  */
  password: Env.get('INFOBIP_PASSWORD'),

  /*
  |---------------------------------------------------------------------------
  | Api Key
  |---------------------------------------------------------------------------
  |
  | This refers to the API key from the dashboard
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
  | two options: basic, app
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
