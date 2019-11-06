const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = 5000;

server.use(
    morgan('tiny'), 
    helmet(), 
    cors()
)

server.get('/', (req,res) =>{
    res.send('server is up')
})

server.listen(port, () => {
    console.log(`Server Is Live On Port ${port}`)
})

