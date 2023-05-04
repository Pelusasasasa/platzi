function sum(a,b) {
    return a + b;
}; 

function calc(num1,num2,callback) {
    return callback(num1,num2);
};

console.log(calc(1,2,sum));

setTimeout(function () {
    console.log("Hola Javascript")
},2000);

function saludo(name) {
    console.log(`Hola ${name}`);
};

setTimeout(saludo,1000,"Agustin")