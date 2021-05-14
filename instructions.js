'use strict'

/**
 * adonis-infobip
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com>
 *                     Ahmad Abdul-Aziz <ahmad.abdulaziz37@gmail.com>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('infobip.js', path.join(__dirname, 'config/infobip.js'))
    cli.command.completed('create', 'config/infobip.js')
  } catch (error) {
    // ignore if infobip.js already exists
  }
}
