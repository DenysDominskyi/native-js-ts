// ======-------------- Generics --------------======

// ======-------------- Task 1 --------------======

// Пример 1: Фильтрация чисел
const numbers = [1, 2, 3, 4, 5]
const isEven = (num: number) => num % 2 === 0

const result = filterArray(numbers, isEven)
console.log(result) // [2, 4]

// Пример 2: Фильтрация строк
const words = ["hello", "world", "typescript"]
const startsWithT = (word: string) => word.startsWith("t")

const result2 = filterArray(words, startsWithT)
console.log(result2) // ["typescript"]

function filterArray<T>(arr: T[], predicat: (el: T) => boolean) {
  arr.filter(predicat)
}

// ======-------------- Task 2 --------------======

// Пример 1: Преобразование чисел в строки
const numbe = [1, 2, 3, 4]
const transformNumberToString = (num: number) => `Number: ${num}`

const resu = mapArray(numbers, transformNumberToString)
console.log(result) // ["Number: 1", "Number: 2", "Number: 3", "Number: 4"]

// Пример 2: Преобразование строк в их длины
const wor = ["hello", "world", "typescript"]
const getLength = (word: string) => word.length

const lengthResults = mapArray(words, getLength)
console.log(lengthResults) // [5, 5, 10]

// Пример 3: Преобразование объектов в строки
type Person = { name: string; age: number }
const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]
const toDescription = (person: Person) => `${person.name} is ${person.age} years old`

const descriptions = mapArray(people, toDescription)
console.log(descriptions) // ["Alice is 25 years old", "Bob is 30 years old"]

function mapArray<T, U>(arr: T[], transformer: (el: T) => U) {
  arr.map(transformer)
}

    // ======-------------- Task 3 --------------======

// Строки
const stringArray = ['apple', 'banana', 'cherry']
const result111 = updateArray(stringArray, 'banana') // ['apple', 'banana', 'cherry']
const result222 = updateArray(stringArray, 'date') // ['apple', 'banana', 'cherry', 'date']

// Числа
const numberArray = [1, 2, 3]
const result333 = updateArray(numberArray, 2) // [1, 2, 3]
const result444 = updateArray(numberArray, 4) // [1, 2, 3, 4]

function updateArray <T>(arr: T[], elemen: T) {
    return arr.includes(elemen) ? arr : [...arr, elemen]
}