
type User = {
    name: string,
    id: string,
}

type Admin = {
    userName: string,
    id: string,
}

let user : User | Admin = { name: 'aniket', id: 'asddw341',}

user =  {
    userName: 'aryan',
    id: 'asdasf'
}

// array 

const arr1: (string[] | number[]) = [ 'a', 'sad', 'sajkba']
const arr2: (string[] | number[]) = [ 1,33,4,5,6]
// if I want to make a mixup arrey of number and string then I can do it by 

const arr3 : (string | number)[] = [1,'a', 3,'asdf', 33] // like that respectively I can make for all other data type 

// also we can use type alias for this

type MixupArr = (string | number)[]

const arr4 : MixupArr = [1,'a', 3,'asdf', 33]

//  set options like that 

// ex : 
let gender : ('male' | 'female')

// gender = 'aniket' // after that we can see the error "Type '"aniket"' is not assignable to type '"male" | "female"'

// so I can only value assign to gender which is either male of female 

gender = 'male'

// we also set the order od datatype in array like that 

let orderArr1 : [number , number, number] = [133,255,566] // if we write any other datatype accept number which mean the datatype mensions in asrrey then it shown error message  ->> one mmore thins when we have to fill arrey according to its datatype type pressiding 

let orderArr2 : [string, string, string] = ['Aniket', 'aryan', 'asdasf'] // it will show error because asrrey datatype mensions are number not string

 // we can also write the datatype in array like that
 
 let orderArr3 : [string, number, number] = ['Aniket', 133, 255] // it will be fine because asrrey datatype mensions are string and number respectively

 // and we can also write the datatype in array like that
 
 let orderArr4 : [number, string, number] = [133, 'Aniket', 255] // it will be fine because asrrey datatype mensions are number and string respectively
 // and we can also write the datatype in array like that
 
 let orderArr5 : [number, number, string] = [133, 255, 'Aniket'] // it will be fine because asrrey datatype mensions are number and string respectively
  

export {}

