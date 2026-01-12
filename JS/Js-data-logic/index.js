let array1 = [20,3,4,7,8,31,90];

//function to get sum of numbers in an array
function getSum(){
    let total = 0;
    for (let i=0; i<array1.length; i++) {
        total = total + array1[i];
    }
    return total;
}

//function to get average of an array
function getAverage(){
    let avg = getSum() / array1.length;
    return avg
}

//format string
function formatString(name){
    return `Hello, ${name}!`
}

console.log(getSum())
console.log(getAverage())
console.log(formatString("Phil"))
