
abstract class takePhoto {
    constructor(
        public cameraBrand: string,
        public maxShots: number
    ) {
        
    }
}

// const newClass = new takePhoto   we cant create a object because this is a abstract class this is the difference between class and abstract clss  it is a blueprint of a class 

    class Canon extends takePhoto {
        constructor(cameraBrand: string, maxShots: number) {
            super(cameraBrand, maxShots)
            this.cameraBrand = cameraBrand
            this.maxShots = maxShots
        }

        public shootMultipleShots(numShots: number): void {
            console.log(`Taking ${numShots} photos with ${this.cameraBrand} camera`)
        }
    }

    