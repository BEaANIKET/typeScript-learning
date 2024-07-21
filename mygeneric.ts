
//  if we dont know what type of data type of data we gona accept then we can use generic method which basically when 

    // 1. we declare a generic type and give it a name
    // 2. then we use that name in our method signature

function createArray<T>(value: T): T {
    return value;
}
// in aerow functions 

const getMoreSearchProducts = <T> (value: T): T=> {
    return value
}

function anotherfunction <T, U>(valueOne: T, valueTwo: U): {}{
    return {valueOne, valueTwo}
}

// or we can do like 
function anotherfunction2 <T, U extends number>(valueOne: T, valueTwo: U): {}{
    return {valueOne, valueTwo}
}

anotherfunction2(1, 2); // we cant write like anotherfunction2(1, '3') because second parameter i extent properties to number 

// we can also extend from coustom type like

interface dataBase {
    id: number,
    name: string,
    age: number
}
function anotherfunction3 <T, U extends dataBase >(valueOne: T, valueTwo: U): {}{
    return {valueOne, valueTwo}
}

anotherfunction3(1, {id: 2, name: 'Aniket', age: 20})

// we can alsp give two or more type 

// here we can pass any data type of data and it auto set it return type to similar type of given data type 

    // for example createArray<string>('hello') will return string, createArray<number>(10) will return number

console.log(createArray<string>('hello')); // 'hello'
console.log(createArray<number>(10)); // 10
console.log(createArray<boolean>(true)); // true

