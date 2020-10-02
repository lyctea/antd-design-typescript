function echo<T>(arg: T): T {
    return arg
}

// 丢失了类型
// 泛型指的是不在函数定义的时候确定类型，而是在函数使用过程中才确定具体的类型
const result = echo('str')
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const res = swap(['string', 123])
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arrs = echoWithArr([1, 2, 3, 4])






// 约束泛型
interface IWitchLength {
    length: number
}
function echoWitchLength<T extends IWitchLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const str = echoWitchLength('str')
const str1 = echoWitchLength([2])
const str2 = echoWitchLength({ length: 1, a: 1 })






// 泛型的其他应用, 推入队列的类型和退出的类型一致
class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }

    pop(): T {
        return this.data.pop()
    }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())
const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue.pop().toLocaleString())






// 在接口使用泛型
interface KeyPair<T, U> {
    key: T
    value: U
}

let kp1: KeyPair<number, string> = { key: 1, value: '234' }
let kp2: KeyPair<string, number> = { key: '1', value: 234 }

let arr: number[] = [1, 2, 3]
let arrTow: Array<number> = [1, 2, 3] // Array 是ts提供的interface




// 函数泛型
interface IPlus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number): number {
    return a + b
}

function connect(a: string, b: string) {
    return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect