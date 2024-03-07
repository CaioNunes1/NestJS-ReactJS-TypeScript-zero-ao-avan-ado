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

const filterMaior30= (pessoa)=> pessoa.idade>=30;//criando uma função para filtrar a pessoa
const listaFiltrada=lista.filter(filterMaior30);
//const listaFiltrada=lista.filter((pessoa)=> !!pessoa.exibir);//esses dois !! são para poder exibir apenas o que tem exibir true
//no caso um ! deixa o exibir falso e dois !! deixa o exibir true, isso é feito pq o js/ts deixaria essa função indefinida

console.log(lista);
console.log(listaFiltrada);

