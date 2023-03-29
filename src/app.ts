// decorator factory

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {}
}

// decorators execute when your class is defined(when js finds class definition)
// not when it is initiated - not when you use to instantiate an object

@Logger('LOGGING PERSON') // we need to execute it as a function with ()
class Person {
  name = 'sawa'

  constructor() {
    console.log('creating new person...')
  }
}

const pers = new Person()
console.log(pers)
