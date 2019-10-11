const dotenv = require('dotenv').config()
const fetch = require('node-fetch')
const deployURL = process.env.deployURL

if (deployURL) {
    console.log(`Making deploy request to ${deployURL}`)
    fetch(deployURL).then(res => {
        console.log(res)
    })
}
else {
    console.error('deployURL not set.')
}