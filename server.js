const express = require("express")
const path = require("path")

const app = express();
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('*', (req, res)=>{
    res.sendfile(path.join(__dirname, 'client/dist/index.html'));
})

const port = process.env.PORT || 3000
app.listen(port)