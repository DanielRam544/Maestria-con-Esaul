import calcular, {sumar, restar} from './funciones.js';

const xx = sumar(15,3)
console.log(xx)

const yy = restar(10,3)
console.log(yy)

const algo = calcular()
console.log(algo)

function multiplicar(a, b) {
    return a * b;
}

const mul = multiplicar(10, 3)
console.log(mul)

const aninimaDividir = (a,b) => {
    console.log(a,b)
    return a / b;
}

const div = aninimaDividir(45,5)
console.log(div)

const anonimaMultiplicar = (a,b) => a * b;
const res = anonimaMultiplicar(10, 3)
console.log(res)

function noPromesa(){
    return Promise.resolve(5)
    .then(x => x * 2)
    .then(x => x + 3)
    .then(console.log)
}

noPromesa()


async function conPromesa(prom){
    const x = await Promise.resolve(5)
    console.log(x*5)
}

conPromesa()