interface IPerson {
    readonly id: number // 只读属性
    name: string
    age?: number //可选属性
}

let viking: IPerson = {
    id: 1,
    name: 'viking',
    age: 20,
}

// viking.id = '23'