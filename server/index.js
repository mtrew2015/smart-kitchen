const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = 5000;
const authRouter = require('./routers/authRouter');
const recipeRouter = require('./routers/recipeRouter');

server.use(
    morgan('tiny'), 
    helmet(), 
    cors()
)

server.use('/api/users', authRouter)
server.use('/api/recipes', recipeRouter)

server.get('/', (req,res) =>{
    res.send('server is up')
})

server.listen(port, () => {
    console.log(`Server Is Live On Port ${port}`)
})

