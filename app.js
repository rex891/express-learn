const express = require('express')
const app = express()
const spawn = require('child_process').spawn
const port = 3000

app.post
app.use(express.static('dist'))
app.post('/getData', (req, res) =>{
    spawn('python3', ['./backend.py'])
        .stdout
        .on('data', data => {
            console.log('sending', data.toString())
            res.send(data.toString())
        })
})
app.listen(port, () => console.log(`listening on port ${port}`))