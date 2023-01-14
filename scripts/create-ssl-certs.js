const devcert = require("devcert")
const fs = require("fs")

devcert.certificateFor(
    ['ssl.local'], {getCaPath: true})
    .then(d => {
        fs.writeFileSync('./certs/devcert.key', d.key)
        fs.writeFileSync('./certs/devcert.cert', d.cert)
        fs.writeFileSync('./certs/devcert.capath', d.caPath)
    }).catch(e => console.log(e))
