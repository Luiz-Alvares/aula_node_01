const express = require('express');

const app = express();

// GET
// POST
// PUT
// PATCH
// DELETE

const usuarios = [
    {
        id: 1345,
        nome: 'Tsunode',
        idade: 37
    },
    {
        id: 2345,
        nome: 'Andreas',
        idade: 22
    }
]

app.get('/usuarios', (request, response) => {
    response.json(usuarios);
});

app.get('/usuarios/:idUsuario', (request, response) => {
    // const idUsuario = request.params.idUsuario
    const { idUsuario } = request.params; // Vamos usar esse

    const usuarioEncotrado = usuarios.find(usuario => usuario.id === +idUsuario);

    response.json(usuarioEncotrado);
});

app.listen(3000, () => {
    console.log('Aplicação rodando na porta 3000 🚀');
});

