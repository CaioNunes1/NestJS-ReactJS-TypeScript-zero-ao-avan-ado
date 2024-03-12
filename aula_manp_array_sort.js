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

// lista.sort((a,b)=>{//compara e vai organizando
//     if(a.idade<b.idade){
//         return -1;
//     }
//     if(a.idade>b.idade){
//         return 1
//     }
//     return 0;
// });

lista.sort((a,b)=>{//compara e vai organizando
    if(a.nome.toUpperCase()<b.nome.toUpperCase()){
        return -1;
    }
    if(a.nome.toUpperCase()>b.nome.toUpperCase()){
        return 1
    }
    return 0;
});

console.log(lista);