
interface User {
    readonly dbId : string; // readonly mine it cant change once we set the value this is only for read
    email: string,
    userId: number,
    google_id?: string // ? mine not required its optional 
    startTrial(): string
    getCoupon(coupenName: string, value: number): number
}
interface User {
    githubLink : string
}

interface Admin extends User {
    role: 'admin' | 'lerner' | 'me'
}

const Aniket : Admin = {
    dbId: '123456',
    email: 'a@a.com',
    userId: 12345,
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: ( coupenName :'Aniket', value :10) => {
        return value
    },
    githubLink: 'https://github.com/BEaANIKET',
    role: 'admin'
}