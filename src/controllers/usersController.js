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

const usersControllers = {
    index: (request, response) => {
        response.json(usuarios);
    },
    show: (request, response) => {
        const { idUsuario } = request.params;

        const usuarioEncotrado = usuarios.find(usuario => usuario.id === +idUsuario);

        response.json(usuarioEncotrado);
    }
}

module.exports = usersControllers;