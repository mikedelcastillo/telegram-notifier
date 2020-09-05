require('dotenv').config({
    path: require('path').join(__dirname, '.env'),
})
const axios = require('axios')

const {TELEGRAM_TOKEN, CHAT_ID} = process.env
const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

module.exports = (text) => axios.get(url, {
    params: {
        chat_id: CHAT_ID,
        text,
    }
}) 
