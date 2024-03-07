const lista=[//array
    {
        nome:'José',
        idade:13
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

// for(let i =0;i<lista.length;i++){
//    console.log(lista[i]);
// }
lista.forEach((objeto) => console.log(objeto)) ;//pode fazer diferente

let soma=0;
lista.forEach((objeto) => {
    soma+=objeto.idade;
}) ;

console.log(`Soma:${soma}`);