const fetch = require('sync-fetch')
const {version} = require('../../package.json')

let activeVersion = version;

let latestVersion = fetch('https://raw.githubusercontent.com/Takkapi/roky/main/package.json').json();
if(activeVersion !== latestVersion.version) {
    console.log('You are running an outdated version of the bot and may miss some important patches/features! Please update as soon as possibe')
}

let commandFoldersList = fetch