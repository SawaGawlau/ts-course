// Basic Types
let id: number = 2
let company: string = 'Sawka'
let isPublishes: boolean = true
let something: any = 'anyTypeMightBeHere'

// array that only contains numbers
let ids: number[] = [1, 2, 3, 4, 5]

// Tuple
let person: [number, string, boolean] = [1, 'sawa', true]

// Tuple Array
let employee: [number, string][] // array of tuples

employee = [
  [1, 'sonia'],
  [2, 'soncia'],
  [3, 'soncia-loncia']
]

// Union
let pid: string | number = 22

// Enum

enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// console.log(Direction1.Up)

// Objects

type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

const sonia: User = {
  id: 28,
  name: 'sonia'
}

// Type Assertion

let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number

// Functions
function addNum(a: number, b: number): number {
  return a + b
}

// console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}
// log('hello from log function')

// interfaces

interface UserInterface {
  readonly id: number // you cannot assign value to id
  name: string
  age?: number // age is optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => y + x
const sub: MathFunc = (x: number, y: number): number => y - x

// Classes are used to create objects

class Employee {
  protected id: number // you can only access id within the class or in the class which extends Person
  name: string // by default it's public

  // when we initialize object Person the constructor runs:
  constructor(id: number, name: string) {
    ;(this.id = id), (this.name = name)
  }

  register() {
    return `${this.name} is now registered`
  }
}

const Sawka = new Employee(1, 'Sawka')
console.log(Sawka.register())
