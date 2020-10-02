let isDone: boolean = false

let age: number = 20
let binaryNumbber: number = 0b1111

let firstName: string = 'jupiter'
let message: string = `Hello, ${firstName}, age is ${age}`

let u: undefined = undefined
let n: null = null

// undefined、null是所有类型的子类型， undefined类型的变量可以赋值给number类型
let num: number = undefined


let notSure: any = 4
notSure = 'maybe it is a stirng'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let  numberOrString: number | string
numberOrString = 123
numberOrString = '123'
// numberOrString = true error