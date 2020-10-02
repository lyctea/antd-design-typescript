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