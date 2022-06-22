const express = require('express');

const usersRouter = require('./routers/users.routes');

const app = express();

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000 🚀');
});

