function summation(num){
    if(num === 1) return 1
    return num + summation(--num)
}
console.log(summation(4));



//example 2

function multiOf3(num){
    if(num <= 3) return 3

    if(num % 3 !== 0){
        num = num - (num%3)

    }
    return num + multiOf3(num - 3)

}
console.log(multiOf3(10));