
const User = {
    name: 'Aniket',
    email: "a@a.com",
    isActive: false,
}

function createUser({name:string, isPaid: boolean}){}

createUser({name:'Aniket', isPaid: true});

// object return type functions like that 

function getUserInfo({name:string, isActive: boolean}): {name: string, isActive: boolean}{
    return {name, isActive}
}

console.log(getUserInfo({name:'Aniket', isActive: true}));

export {}