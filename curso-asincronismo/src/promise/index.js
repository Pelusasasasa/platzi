const promise = new Promise(function (resolve,reject) {
    resolve('hey!')
});

const cows = 10;

const countCows = new Promise(function (resolve,reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject(`There isn't cows on the farm`);
    };
});

countCows.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error);
});