const objs = [
    {
    "nome": "Jacob Krajcik",
    "celular": "467.678.9162 x87551",
    "email": "Santos_Marquardt@gmail.com",
    "endereco": "9062 Brant Fords",
    "idade": 91,
    "id": "1",
    "ativiExtra": null ,
    },
    {
    "nome": "Kathleen Simonis Jr.",
    "celular": "(854) 263-3057 x64968",
    "email": "Robbie47@gmail.com",
    "endereco": "717 Smith Crossroad",
    "idade": 50,
    "id": "2",
    "ativiExtra": null ,
    }
];
console.log(objs);
console.log(typeof objs);

const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
    console.log(pessoa.celular);
})