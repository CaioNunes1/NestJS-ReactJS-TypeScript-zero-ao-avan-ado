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

const converte_obj=(objeto)=>{
    return objeto.nome
}

console.log(lista.map(objeto=>objeto.idade));//fazendo o map para imprimir apenas a idade, o map recebe um objeto e retorna o 
//idade do objeto, como exatamente está acima no converte_obj
console.log(lista.map(converte_obj));//duas formas diferentes de fazer a mesma coisa

const converte_obj2=(objeto2)=>{
    return {
        nome:objeto2.nome,
        idade:objeto2.idade,
        nomeIdade:`${objeto2.nome}+${objeto2.idade}`
    }
}

console.log(lista.map(converte_obj2));