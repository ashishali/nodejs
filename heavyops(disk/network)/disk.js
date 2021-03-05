var access = require('fs')
const path = require('path')
access.readFile('/Users/ashishybeary/Documents/nodejs/heavyops(disk/network)/data.json', 'utf-8', (err,data) => {
    var parser = JSON.parse(data)
    console.log("Way 2:")
    console.log(data)
    console.log(parser.name)
    console.log(parser.kelsa)
})

var access = require('/Users/ashishybeary/Documents/nodejs/heavyops(disk/network)/data.json')
console.log("Way 1:")
console.log(access)
console.log(access.name)
console.log(access.kelsa)
console.log('')
console.log('')

console.log("Directory:", __dirname)
console.log("Filename:", __filename)

console.log('')
console.log('')
console.log('Fetching with path module...')
console.log(`Filename: ${path.basename(__filename)}`)
console.log(`Directory: ${path.basename(__dirname)}`)
console.log('')
console.log('')


console.log(process.argv)