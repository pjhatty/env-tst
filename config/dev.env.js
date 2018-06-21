'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  WEBTASK_URL: JSON.stringify(process.env.WEBTASK_URL)
})
