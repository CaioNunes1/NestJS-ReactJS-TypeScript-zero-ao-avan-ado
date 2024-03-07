const lista=[//array
    {
        nome:'José',
        idade:13,
        exibir:true
    },
    {
        nome:'Joao',
        idade:15
    },
    {
        nome:'Maria',
        idade:18
    },
    {
        nome:'Gabriel',
        idade:20
    },
    {
        nome:'Fernanda',
        idade:25
    },
    {
        nome:'André',
        idade:21
    },
    {
        nome:'José',
        idade:19
    },
    {
        nome:'Heitor',
        idade:20
    },
    {
        nome:'gustavo',
        idade:41
    },
    {
        nome:'Sandro',
        idade:25
    },
]

const buscaNome=(pessoa)=>pessoa.nome=== 'Fernanda';
//const buscaIdade=(pessoa)=>pessoa.idade >30; maneira de usar para passar por função também

const novaPessoa=lista.find((pessoa)=>pessoa.idade >30);
const novaPessoa2=lista.find(buscaNome);

console.log(novaPessoa);
console.log(novaPessoa2);