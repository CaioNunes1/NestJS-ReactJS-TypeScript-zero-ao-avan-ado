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
        nome:'Gustavo',
        idade:41
    },
    {
        nome:'Sandro',
        idade:25
    },
]

const resultadoSome=lista.some((objeto)=> objeto.idade >40);//se achar um maior que 40 ele retorna true
const resultadoEvery=lista.every((objeto)=> objeto.idade>20)//se todos forem maiores que 20 ele retorna true se não false

console.log('resultado Some',resultadoSome);
console.log('resultado Every',resultadoEvery);