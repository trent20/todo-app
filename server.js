let express = require('express')
let path = require('path')
let app = express()

app.get('/',function(request, response){
    response.sendFile(
        path.join(__dirname, 'ToDo.html')
    )
})

app.use(express.static('./'))

app.listen(8000)