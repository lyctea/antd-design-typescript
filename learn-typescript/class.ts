/**
 * public、private、readonly、protected、static
 * 公开    私有      只读      保护        静态
 */
class Animal {
    protected name: string // public、private、readonly、protected、static
    constructor(name: string) {
        this.name = name
    }

    run() {
        return `${this.name} is running.`
    }
}


const snake = new Animal('lily')
console.log(snake.run())


class Dog extends Animal {
    bark() {
        return `${this.name} is barking.`
    }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())


class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow, ' + super.run() //super.调用父类的方法
    }
}


const maomao = new Cat('maomap')
console.log(maomao.run())


/**
 * 类和接口的应用
 */

interface Raiod {
    switchRadio(): void
}

// 继承的接口
interface RadiosWithBattery extends Raiod {
    checkBatteryStatus()
}



class Car implements Raiod {
    switchRadio() {

    }
}

// 需要同时实现 switchRadio、checkBatteryStatus
class CellPhone implements RadiosWithBattery {
    switchRadio() {

    }

    checkBatteryStatus() {

    }
}