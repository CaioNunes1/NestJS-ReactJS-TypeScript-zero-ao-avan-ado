const lista=[//array
    {
        nome:'José',
        idade:13,
        cartoes:['3242','6534'],
    },
    {
        nome:'Joao',
        idade:15,
        cartoes:['2462','9230'],
    },
    {
        nome:'Maria',
        idade:18,
        cartoes:['1355','543'],
    },
    {
        nome:'Gabriel',
        idade:20,
        cartoes:['0394','739'],
    },
    {
        nome:'Fernanda',
        idade:25,
        cartoes:['3241','6564'],
    },
    {
        nome:'André',
        idade:21,
        cartoes:['3242','6534'],
    },
    {
        nome:'José',
        idade:19,
        cartoes:['1237','3334'],
    },
    {
        nome:'Heitor',
        idade:20,
        cartoes:['2955','6500'],
    },
    {
        nome:'gustavo',
        idade:41,
        cartoes:['2323','0421'],
    },
    {
        nome:'Sandro',
        idade:25,
        cartoes:['3242','6534'],
    },
]

const cartoes=lista.map((cartao)=>cartao.cartoes);//retorna uma lista de listas de cartões
const cartoesFlat=lista.flatMap((cartao)=>cartao.cartoes);//retorna apenas uma lista de cartões, usado quando tem uma lista dentro de outra

console.log(cartoes);
console.log(cartoesFlat);