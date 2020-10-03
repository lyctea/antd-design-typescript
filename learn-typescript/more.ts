// 类型别名,在联合类型中使用
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y
}

const sum2: PlusType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}


// 类型断言, 当type不确定联合类型，当不确定类型的时候，需要使用其中一种类型的时候
function getLength(input: string | number): number {
    // const str = input as String
    // if (str.length) {
    //     return str.length
    // } else {
    //     const number = input as number
    //     return number.toString().length
    // }

    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}