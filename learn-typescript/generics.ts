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