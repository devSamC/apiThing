const app = require('express')()

const port = 8000 ;

app.listen(port, 
    
    () => console.log(`server is up and running on http://localhost:${port}`)
)
