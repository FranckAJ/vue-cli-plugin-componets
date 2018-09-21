module.exports = [
    {
        type: 'list',
        name: 'customTheme',
        message: 'Escolha uma opção de tema:',
        choices: [
            {name:'Tema Default', value: 'default'},
            {name:'Tema Customizado', value: 'custom'},
        ],
        default: 'default',
    }
]