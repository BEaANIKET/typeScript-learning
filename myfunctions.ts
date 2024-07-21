function addTwo(num){
    return num+2
}

// addTwo(5)  // or we can give a string as a argumant like addTwo('5) bacause we dont declear so the type of num is any this is not good pratices so 
function addTwo2(num: number){
    return num+2
}

// addTwo(5) 
// now we can't give string or any data type as a argument to addTwo2 accept number because we defime num to number

// lets define a functions return type 

function addTwo3(num: number) : number{
    return num+2
}
// by aerow functions

const getHello = (name: string): string => {
    return name + 'Hello'
}

let arrey = ['Aniket', 'hello', '2']

let returnedVal = arrey.map((arreyVal):string => {
   return arreyVal
})

console.log(returnedVal);



export {}