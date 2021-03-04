var writer = require('fs')

var toWrite = {
    name : "Charlie",
    kelsa : "Development",
    from : "Bengaluru"
}
writer.writeFile("/Users/ashishybeary/Documents/nodejs/heavyops(disk/network)/written.json", JSON.stringify(toWrite), (err) => {
    console.log("Finished with the following", err)
})