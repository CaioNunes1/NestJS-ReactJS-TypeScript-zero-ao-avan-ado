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

// const pessoa={
//     jose:{
//         idade:25,        
//     },
//     joao:{
//         idade:30,
//     },
//     maria:{
//         idade:30,
//     }
// }

const funcaoReduce=((acc,objeto)=>{//objeto seria cada informação nesse abre e dentro do fecha chave de 
    return {
        // acc na primeira linha=>{} 
        //depois acc=>{Jose:
        //     idade:13;
        // }}
        ...acc,//vai pegar o acumulador e
        [objeto.nome]:{
            idade:objeto.idade
        }
    }
})



const pessoa=lista.reduce(funcaoReduce,{});//acc é o acumulador

const pessoasArray=lista.reduce((acc,objeto)=>{
    acc.push(objeto.idade);
    return acc;
},[]);

console.log(pessoa);
console.log(`idade:${pessoa.gustavo.idade}`);
console.log(pessoasArray);