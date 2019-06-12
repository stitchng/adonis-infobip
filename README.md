# adonis-infobip

An addon/plugin package to provide InfoBip single/bulk SMS/Voice services in AdonisJS 4.0+

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]

<img src="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1497112678/adonis-purple_pzkmzt.svg" width="200px" align="right" hspace="30px" vspace="140px">

## Getting Started

>Install from the NPM Registry

```bash

   $ adonis install adonisjs-infobip

```

## Usage

>Import and use 

```js

  'use strict'
  
  const Infobip = use('InfoBip')
  
  class MessageController {
  
      constructor(User){
          this.user = User
      }
      
      static get inject(){
          return [
              'App/Models/User'
          ]
      }
      
      async sendOneSms({ request, response }){
      
          let user = await this.user.find(1) // get user from database

          let response = await Infobip.sendSMS({
              to: String(user.phone_number),
              from:"MESSAGE-NG",
              text:`Hello ${user.full_name}, Happy birthday!`
          })
          
          console.log("Bulk ID: ", response.body.bulkId)
          
          return response.status(200).json({
             data:response.body
          })
      }
  }
  
  module.exports = MessageController

```

## License

MIT

## Running Tests
```bash

    npm i

```

```bash

    npm run lint

    npm run test

```

## Credits

- [Ifeora Okechukwu <Head Of Technology - Oparand>](https://twitter.com/isocroft)
- [Ahmad Abdul-Aziz <Software Engineer>](https://twitter.com/dev_amaz)
    
## Contributing

See the [CONTRIBUTING.md](https://github.com/stitchng/adonis-infobip/blob/master/CONTRIBUTING.md) file for info

[npm-image]: https://img.shields.io/npm/v/adonisjs-infobip.svg?style=flat-square
[npm-url]: https://npmjs.org/package/adonisjs-infobip

[travis-image]: https://img.shields.io/travis/stitchng/adonis-infobip/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/stitchng/adonis-infobip

[coveralls-image]: https://img.shields.io/coveralls/stitchng/adonis-infobip/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/github/stitchng/adonis-infobip
