/**
 * @param z 可选参数 也可以用 ?
 */
function add1(x: number, y: number, z: number = 10): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

let result = add1(2, 3, 4)


// add 自动获得了类型，通过ts的类型推断
const add = function (x: number, y: number, z: number = 10): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}


// => 是声明函数类型返回
const add2: (x: number, y: number, z?: number) => number = add