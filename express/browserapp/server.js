var mod = require('express')
var app = mod()

app.use(mod.static(__dirname))
var messagesArray = [
    {name: "User1", message: "hi"},
    {name: "User2", message: "hello"}
]
app.get('/messages', (req, res) => {
    res.send(messagesArray)
})
var serve = app.listen(3000, () => {
    console.log("Server is listening on port ", serve.address().port)
})