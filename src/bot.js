const {Client, Intents} = require('discord.js')
const {token} = require('../config.json')

const client = new Client({intents: [Intents.FLAGS.GUILDS]})

require('./utils/autoupdate')

client.once('ready', () => {
    console.log('Ready')
})

client.loing(token)