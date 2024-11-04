let numbers = [1,2,3,3,4]

console.log(numbers)


const graeterThan3 =
 (function (num){
    return num  %2 == 0;
})

console.log(graeterThan3(numbers))


numbers.push(5)
console.log(numbers)

numbers.pop()
console.log(numbers)

