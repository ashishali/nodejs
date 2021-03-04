var mod = require('express')
var app = mod()

app.use(mod.static(__dirname))
var serve = app.listen(3000, () => {
    console.log("Server is listening at ", serve.address().port)
})