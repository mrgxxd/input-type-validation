'use strict'

const http = require('http')
const itv = require('./')

http.createServer((req, res) => {
    console.log('email : '+ itv.isEmail(`mrgxxd@dycode.com`))
    res.end('Welcome')
}).listen(3000)
