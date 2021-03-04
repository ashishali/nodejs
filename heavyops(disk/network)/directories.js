var access = require('fs')
access.readdir("/Users/ashishybeary/Documents/nodejs/heavyops(disk/network)/", (err,data) => {
    console.log(data)
})
